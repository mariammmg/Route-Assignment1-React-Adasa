import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'


export default function Footer() {
  return (
    <>
      <footer className="custom-footer position-relative overflow-hidden border-top">
        

        <div className="container-xl position-relative py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <Link
                to="/"
                className="d-flex align-items-center gap-3 mb-4 text-decoration-none"
              >
                <div className="brand-icon">ع</div>
                <span className="fs-4 fw-bold text-white">عدسة</span>
              </Link>

              <p className="small text-neutral mb-4">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>

              <div className="d-flex gap-2">
                <a
                  className="social-btn"
                  href="https://x.com/adasah"
                  target="_blank"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a className="social-btn" href="https://github.com/adasah" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="social-btn" href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a className="social-btn" href="https://www.youtube.com/@adasah" target="_blank">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="footer-title">استكشف</h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>
                    المدونة
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="footer-title">التصنيفات</h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <Link
                    to="/blog/category/إضاءة"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    إضاءة
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/category/بورتريه"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    بورتريه
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/category/مناظر طبيعية"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    مناظر طبيعية
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/category/معدات"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    معدات
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/category/تقنيات"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    تقنيات
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="footer-title">ابقى على اطلاع</h5>
              <p className="small text-neutral mb-3">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>

              <form>
                <input
                  type="email"
                  className="form-control footer-input mb-3"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <button className="btn footer-btn w-100" type="submit">
                  اشترك
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-top">
          <div className="container-xl py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="small mb-0 text-secondary">
              © 2026 عدسة. صنع بكل
              <i className="fa-solid fa-heart text-orange"></i>
              جميع الحقوق محفوظة.
            </p>

            <div className="d-flex gap-4 footer-bottom">
              <a href="#" className="footer-bottom-link">
                سياسة الخصوصية
              </a>
              <a href="#" className="footer-bottom-link">
                شروط الخدمة
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
