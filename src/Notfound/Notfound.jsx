import React from 'react'
import './notfound.css'
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <>
      <div
        className=" d-flex justify-content-center position-relative min-vh-100 flex-column"
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 grid-bg"></div>

        <div
          className="position-relative container text-center px-4 mt-5"
          style={{ maxWidth: 520 }}
        >
          <h1 class="orange">404</h1>

          {/* Icon */}
          <div className="icon-wrapper mx-auto mb-4 position-relative">
            <div className="icon-bg orange position-absolute top-0 bottom-0 start-0 end-0 rounded-circle"></div>

            <div className="d-flex align-items-center justify-content-center h-100 position-relative">
              <svg
                width="56"
                height="56"
                fill="none"
                stroke="currentColor"
                className="text-warning"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <span className="square-badge bg-orange position-absolute top-0 end-0"></span>
            <span className="circle-badge bg-orange position-absolute bottom-0 start-0"></span>
          </div>

          {/* Text */}
          <h2 className="fw-bold mb-3">عفواً! الصفحة غير موجودة</h2>
          <p className="text-secondary fs-5 mb-4">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
            <Link to="/" className="btn btn-warning px-4 py-2 rounded-pill">
              الذهاب للرئيسية
            </Link>
            <Link
              to="/blog"
              className="btn btn-outline-light rounded-pill px-4 py-2 learn-more-btn"
            >
              تصفح المقالات
            </Link>
          </div>

          <div className="pt-4 border-top border-secondary">
            <p className="text-secondary small mb-3">قد تجد هذه مفيدة:</p>
            <div className="d-flex justify-content-center gap-3 small">
              <Link to="/blog" className="orange text-decoration-none">
                المدونة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
