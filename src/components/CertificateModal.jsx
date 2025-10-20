import React from "react";

const CertificateModal = ({ src, onClose }) => {
  if (!src) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative bg-white/10 p-4 rounded-lg max-w-5xl w-[90%]" onClick={(e)=>e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl hover:text-red-400 transition">✕</button>
        <img src={src} alt="Certificate" className="rounded-lg w-full h-auto max-h-[80vh] object-contain border border-white/10" />
      </div>
    </div>
  );
};

export default CertificateModal;
