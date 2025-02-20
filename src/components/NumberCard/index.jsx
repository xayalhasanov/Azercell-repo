import React from "react";
import "./style.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import GiftIcon from "../../assets/gift_icon.png";
import { FaGift } from 'react-icons/fa6';

const NumberCard = ({ numberListing, handleContactClick }) => {
  const {
    msisdn,
    includedMinutes,
    includedDataMb,
    paymentType,
    price,
    storeId,
  } = numberListing;

  const hasGifts = includedMinutes || includedDataMb;

  const formatGiftText = (minutes, dataMb) => {
    let giftText = "";
    
    if (dataMb) {
      if (dataMb >= 1000) {
        const gbValue = (dataMb / 1000).toFixed(1).replace(/\.0$/, "");
        giftText += `${gbValue} GB`;
      } else {
        giftText += `${dataMb} MB`;
      }
    }
    if (minutes) {
      if (giftText) {
        giftText += ", ";
      }
      giftText += `${minutes} dəq.`;
    }
    return giftText.trim() || "Hədiyyəsiz";
  };

  const formattedMsisdn = msisdn.replace(
    /(\d{2})(\d{3})(\d{2})(\d{2})/,
    "$1 $2 $3 $4"
  );
  const giftText = formatGiftText(includedMinutes, includedDataMb);
  const typeLabel = paymentType === "postpaid" ? "Fakturalı" : "Fakturasız";
  const formattedPrice = `${price} ₼`;

  const onContactClick = () => {
    handleContactClick(numberListing);
  };

  return (
    <div className="card">
      <div className="number">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-number">{formattedMsisdn}</Tooltip>}
        >
          <span style={{ cursor: "pointer" }}>{formattedMsisdn}</span>
        </OverlayTrigger>
      </div>

      <div className="gift">
        <FaGift className="me-2" />
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-gift">{giftText}</Tooltip>}>
          <span className={hasGifts ? "gift-text has-gifts" : "gift-text"}>
            {giftText}
          </span>
        </OverlayTrigger>
      </div>

      <div className="type">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-type">{typeLabel}</Tooltip>}
        >
          <span style={{ cursor: "pointer" }}>{typeLabel}</span>
        </OverlayTrigger>
      </div>

      <div className="price">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-price">{formattedPrice}</Tooltip>}
        >
          <span style={{ cursor: "pointer" }}>{formattedPrice}</span>
        </OverlayTrigger>
      </div>

      <div className="action">
        <button onClick={onContactClick} className="contact-button">
          Əlaqə
        </button>
      </div>
    </div>
  );
};

export default NumberCard;
