"use client";

export default function WhatsAppFloat() {
  return (
    <>
      <a href="https://wa.me/9779841XXXXXX" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: #25d366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          z-index: 2000;
          transition: transform 0.3s;
        }
        .whatsapp-float:hover { transform: scale(1.1); }
      `}</style>
    </>
  );
}