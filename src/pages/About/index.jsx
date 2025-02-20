import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";

function AboutSection() {
  return (
    <div className="container my-5" style={{ minHeight: 'calc(100vh - 300px)' }}>
    {/* Changed py-20 to py-5 and added flex-grow */}
    <div className="px-3 py-5">
      <h1 className="h4 fw-bold mb-2">
        SimSim – Nömrələrinizi İdarə Etməyin Rəqəmsal Yolu!
      </h1>
        <p className="fw-bold mb-4">
          SimSim, nömrələrinizi idarə etmək üçün{" "}
          <span className="text-primary">unikal və innovativ həll</span> təqdim edir!
        </p>
        
        <div className="mb-4">
          <h2 className="h5 fw-bold">📌 Necə işləyir?</h2>
          <ul className="list-unstyled ms-4">
            <li><strong>Excel</strong> faylına nömrələrinizi daxil edirsiniz.</li>
            <li>
              Nömrələriniz <strong>internet üzərindən</strong> paylaşılır və saytımızda yayımlanır.
            </li>
            <li>
              Təqdim etdiyimiz <strong>planşetlər</strong> vasitəsilə kağız kataloqlar tamamilə əvəz olunur.
            </li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h2 className="h5 fw-bold">🔷 Üstünlüklər:</h2>
          <ul className="list-unstyled ms-4">
            <li><strong>Kağız israfı</strong> və <strong>qıralama</strong> problemlərinə son!</li>
            <li><strong>“15 nömrə limiti”</strong> kimi məhdudiyyətlər artıq <strong>yoxdur</strong>!</li>
            <li><strong>7/24</strong> istənilən cihazdan <strong>idarəetmə imkanı</strong>!</li>
            <li>İşçi heyətinin <strong>iş yükünü</strong> azaldır, müştərilər üçün isə <strong>rahatlıq yaradır</strong>!</li>
            <li>Müştərilər <strong>mağazaya gəlmədən</strong> nömrələri görüntüləyə bilər!</li>
            <li><strong>QR kod</strong> ilə nömrələrinizi rahatlıqla paylaşın və əlçatan edin!</li>
            <li>Nömrələriniz təkcə regionda deyil, <strong>dünyanın dörd bir tərəfində</strong> əlçatan olsun!</li>
          </ul>
        </div>
        
        <p className="fw-bold mb-4">
          SimSim-ə qoşulun və gələcəyin rəqəmsal həllindən yararlanın!
        </p>
        
        <div className="d-flex justify-content-center mt-4">
          <Button 
            variant="primary" 
            as={Link} 
            to="/contact" 
            className="text-decoration-none text-white"
          >
            SimSim-ə qoşul
          </Button>
        </div>

      </div>
    </div>
  );
}

export default AboutSection;
