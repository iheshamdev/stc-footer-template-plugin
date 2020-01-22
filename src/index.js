import './styles/main.scss'
import footerTemplate from './footer-template'

const footerContent = {
    en: {
        stc_initiatives: "part of stc initiatives",
        follow_us: "Follow us",
        copyright: "copyright © 2020 stc. all rights reserved",
        copyright_links: {
            contact_us: {
                text: "contact us",
                url: "https://www.stc.com.sa/wps/wcm/connect/english/helpAndSupport/contact"
            },
            privacy_policy: {
                text: "privacy policy",
                url: "http://www.stc.com.sa/wps/wcm/connect/english/privacyStatement/Privacy+Statement"
            },
            terms_and_conditions: {
                text: "terms and conditions",
                url: "https://www.stc.com.sa/wps/wcm/connect/english/individual/static/terms-conditions"
            }
        }
    },
    ar: {
        stc_initiatives: "إحدى مبادرات stc",
        follow_us: "تابعنا",
        copyright: "العلامة التجارية وجميع الحقوق محفوظة © 2020",
        copyright_links: {
            contact_us: {
                text: "تواصل معنا",
                url: "https://www.stc.com.sa/wps/wcm/connect/arabic/helpAndSupport/contact"
            },
            privacy_policy: {
                text: "سياسة الخصوصية",
                url: "http://www.stc.com.sa/wps/wcm/connect/arabic/privacyStatement/Privacy+Statement"
            },
            terms_and_conditions: {
                text: "الشروط والاحكام",
                url: "https://www.stc.com.sa/wps/wcm/connect/arabic/individual/static/terms-conditions"
            }
        }
    }
};

// Select all footers and inject the template inside of each one
const stcFooterElements = document.querySelectorAll('.stc-footer-template');
stcFooterElements.forEach(el => {
    const footerLang = el.classList.contains('stc-ar') ? 'ar' : 'en';
    const stcLogo = el.classList.contains('stc-dark-theme') ? 'stc-logo-white' : 'stc-logo';
    el.innerHTML = footerTemplate(footerContent[footerLang], stcLogo)
});

// Responsive process 
function applyMobView() {
    stcFooterElements.forEach(el => el.offsetWidth <= 860 || window.innerWidth <= 860 ? el.classList.add('mob-view') : el.classList.remove('mob-view'))
}
applyMobView();
window.onresize = e => applyMobView();