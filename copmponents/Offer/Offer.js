import React from "react";
import styles from "../../styles/Offer.module.css";
import ImageSlider from "../Slider/Slider";
export const Offer = ({ props }) => {
  const {
    modelByClassifierName,
    productionYear,
    equipmentName,
    vin,
    equipmentVariantFuelType,
    equipmentVariantEnginePower,
    autoPriceSummary,
    advancedOptions,
    adjustment,
    colorByClassifierName,
    equipmentVariantTransmission,
    equipmentVariantTransmissionType,
    engineCapacity,
    imgs,
    brand,
    autoPrice,
  } = props;
  return (
    <div className={styles.offerCard}>
      <div className={styles.overflow}>
        <div className={styles.offerCardTitleContainer}>
          <h2
            className={styles.offerCardTitle}
          >{`${brand} ${modelByClassifierName} ${equipmentName} ${engineCapacity} ${equipmentVariantTransmission}`}</h2>
          <p className={styles.offerCardProductionYear}>{productionYear}</p>
        </div>
        <p className={styles.vin}>{vin}</p>
        {/* <div className={styles.imgContainer}> */}
        <ImageSlider key={vin} vin={vin} className={styles.img} slides={imgs} />
        {/* </div> */}
        <ul className={styles.propertiesList}>
          <li className={styles.property}>
            <p className={styles.propertyName}>Двигатель</p>
            <p>
              {engineCapacity} л <mark className={styles.mark}>/</mark>
              {equipmentVariantEnginePower} лс{" "}
              <mark className={styles.mark}>/</mark> {equipmentVariantFuelType}
            </p>
          </li>
          <li className={styles.property}>
            <p className={styles.propertyName}>КПП</p>
            <p>{equipmentVariantTransmissionType}</p>
          </li>
          <li className={styles.property}>
            <p className={styles.propertyName}>Пробег</p>
            <p>{`${adjustment} км`}</p>
          </li>
          <li className={styles.property}>
            <p className={styles.propertyName}>Цвет</p>
            <p>{colorByClassifierName}</p>
          </li>
        </ul>
        {advancedOptions.length ? (
          <div>
            <p className={styles.propertyName}>Пакеты</p>
            <div className={styles.additionalsContainer}>
              <p className={styles.additional}>{advancedOptions[0].name}</p>
              {advancedOptions.length > 1 && (
                <span className={styles.plusAdditional}>
                  ( + еще {advancedOptions.length} пакета )
                </span>
              )}
            </div>
          </div>
        ) : null}
        <div className={styles.buyContainer}>
          <div className={styles.priceContainer}>
            <p className={styles.price}>
              <mark className={styles.mark}>{autoPrice}</mark> ₽
            </p>
            {advancedOptions.length ? (
              <p>
                Доп. опции на{" "}
                <mark className={styles.mark}>{autoPriceSummary}</mark> ₽
              </p>
            ) : null}
          </div>
          <div>
            <button className={styles.buyBtn}>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
