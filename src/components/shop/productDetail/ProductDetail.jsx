/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import styles from "./ProductDetail.module.css"
import { useParams } from 'react-router'
import { useProduct } from '../../../ApiContext/ProductContext'

export default function ProductDetail() {
  const params = useParams()
  const { id } = params
  const { product } = useProduct()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  
  const item = product.filter((element) => { return element.id == id })
  const currentProduct = item[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!currentProduct) {
    return (
      <div className={styles.loading}>
        <p>Loading product...</p>
      </div>
    )
  }

  const images = [currentProduct.image, currentProduct.image, currentProduct.image]

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const handleWhatsAppOrder = () => {
    const message = `Hi! I want to order:\n${currentProduct.title}\nQuantity: ${quantity}\nPrice: $${(currentProduct.price * quantity).toFixed(2)}`
    const phoneNumber = '1234567890' // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className={styles.productDetail}>
      <div className={styles.container}>
        <div className={styles.gallery}>
          <div className={styles.mainImg}>
            <img src={`/${images[selectedImage]}`} alt={currentProduct.title} />
          </div>
          <div className={styles.thumbs}>
            {images.map((img, idx) => (
              <div 
                key={idx}
                className={`${styles.thumb} ${selectedImage === idx ? styles.active : ''}`}
                onClick={() => setSelectedImage(idx)}
              >
                <img src={`/${img}`} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.category}>{currentProduct.category}</div>
          <h1>{currentProduct.title}</h1>
          
          <div className={styles.rating}>
            <div className={styles.stars}>★★★★★</div>
            <span>(89 reviews)</span>
          </div>

          <div className={styles.price}>${currentProduct.price}</div>

          <p className={styles.desc}>
            Premium quality cosmetic product designed to give you the best results. 
            Perfect for daily use with a gentle formula suitable for all types.
          </p>

          <div className={styles.qty}>
            <label>Quantity</label>
            <div className={styles.qtyControl}>
              <button onClick={() => handleQuantityChange(-1)}>−</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
          </div>

          <button className={styles.whatsappBtn} onClick={handleWhatsAppOrder}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Order via WhatsApp
          </button>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span>✓</span> Free Shipping
            </div>
            <div className={styles.feature}>
              <span>✓</span> Secure Payment
            </div>
            <div className={styles.feature}>
              <span>✓</span> Quality Guaranteed
            </div>
          </div>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Product Details</h2>
        <div className={styles.detailsContent}>
          <div className={styles.detailRow}>
            <strong>Category:</strong>
            <span>{currentProduct.category}</span>
          </div>
          <div className={styles.detailRow}>
            <strong>Brand:</strong>
            <span>Premium Beauty</span>
          </div>
          <div className={styles.detailRow}>
            <strong>Origin:</strong>
            <span>USA</span>
          </div>
        </div>
      </div>
    </div>
  )
}