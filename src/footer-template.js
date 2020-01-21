const footerTemplate = (footerContent, stcLogo) => {
    return `
    <div class="about-stc">
        <div class="stc-logo">
            <img src="https://poll.laywagif.com/assets/images/${stcLogo}.png" alt="STC logo" />
            <p>${footerContent.stc_initiatives}</p>
        </div>
        <div class="social-media-links">
            <p>${footerContent.follow_us}</p>
            <ul>
                <li>
                    <a href="https://twitter.com/stc" target="_blank" rel="noopener">
                        <img src="https://poll.laywagif.com/assets/images/twitter.png" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a
                       href="https://www.youtube.com/user/STCsaudiarabia"
                       target="_blank"
                       rel="noopener">
                        <img src="https://poll.laywagif.com/assets/images/youtube.png" alt="Youtube" />
                    </a>
                </li>
                <li>
                    <a
                       href="https://www.facebook.com/STC/"
                       target="_blank"
                       rel="noopener">
                        <img src="https://poll.laywagif.com/assets/images/facebook.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a
                       href="https://www.instagram.com/stc/"
                       target="_blank"
                       rel="noopener">
                        <img src="https://poll.laywagif.com/assets/images/instagram.png" alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a
                       href="https://www.snapchat.com/add/stcnow"
                       target="_blank"
                       rel="noopener">
                        <img src="https://poll.laywagif.com/assets/images/snapchat.png" alt="Snapchat" />
                    </a>
                </li>
                <li>
                    <a
                       href="https://www.linkedin.com/company/stc"
                       target="_blank"
                       rel="noopener">
                        <img src="https://poll.laywagif.com/assets/images/linkedin.png" alt="Linkedin" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="copyright">
        <div class="stc-logo-copyright">
            <a href="http://stc.com.sa" target="_blank" rel="noopener">
                <img
                     src="https://poll.laywagif.com/assets/images/stc-logo-copyright.png"
                     alt="stc logo copyright" />
            </a>
            <p>${footerContent.copyright}</p>
        </div>

        <div class="copyright-links">
            <a
               href="${footerContent.copyright_links.contact_us.url}"
               target="_blank"
               rel="noopener">${footerContent.copyright_links.contact_us.text}</a>
            <span>.</span>
            <a
               href="${footerContent.copyright_links.privacy_policy.url}"
               target="_blank"
               rel="noopener">${footerContent.copyright_links.privacy_policy.text}</a>
            <span>.</span>
            <a
               href="${footerContent.copyright_links.terms_and_conditions.url}"
               target="_blank"
               rel="noopener">${footerContent.copyright_links.terms_and_conditions.text}</a>
        </div>
    </div>
    `
}

export default footerTemplate;