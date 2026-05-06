class SiteFooter extends HTMLElement {
    connectedCallback() {
        const isHome = this.getAttribute('page') === 'home';
        const extraLinks = isHome
            ? `<a href="/pilot.html" class="hover:text-white transition-colors">Pilot Offer</a>
               <a href="/#faq" class="hover:text-white transition-colors">FAQ</a>
               <a href="/#work" class="hover:text-white transition-colors">Our Work</a>`
            : `<a href="/" class="hover:text-white transition-colors">Home</a>`;

        const linkedinSvg = `<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

        this.innerHTML = `
        <footer class="bg-gray-900 text-gray-400 py-12 px-5${isHome ? '' : ' mt-16'}">
            <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                    <div class="text-white font-bold text-lg">Publif<span class="text-brand-light">ai</span></div>
                    <p class="text-sm mt-1">Websites for small businesses, built on WhatsApp.</p>
                    <div class="flex gap-6 mt-4">
                        <div class="text-xs">
                            <p class="text-white font-medium">Shashank Singla</p>
                            <p class="text-gray-500">Co-founder &middot; <a href="https://hcode.tech" target="_blank" class="hover:text-white transition-colors">HCode Technologies</a></p>
                            <a href="https://www.linkedin.com/in/shashanksingla/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 mt-1 text-brand-light hover:text-white transition-colors">${linkedinSvg} LinkedIn</a>
                        </div>
                        <div class="text-xs">
                            <p class="text-white font-medium">Gaurav Tiwari</p>
                            <p class="text-gray-500">Co-founder &middot; <a href="https://paytunes.in" target="_blank" class="hover:text-white transition-colors">PayTunes</a></p>
                            <a href="https://www.linkedin.com/in/tiwarigaurav1/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 mt-1 text-brand-light hover:text-white transition-colors">${linkedinSvg} LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
                    ${extraLinks}
                    <a href="/terms.html" class="hover:text-white transition-colors">Terms</a>
                    <a href="/privacy.html" class="hover:text-white transition-colors">Privacy</a>
                    <a href="/refunds.html" class="hover:text-white transition-colors">Refunds</a>
                    <a href="/contact.html" class="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
            <div class="max-w-5xl mx-auto mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
                <span>Copyright &copy; ${new Date().getFullYear()} <span class="text-brand-light font-medium">PublifyX Tech Pvt. Ltd.</span> &nbsp;|&nbsp; All rights reserved</span>
                <span>Powered by <a href="https://niptao.com" target="_blank" class="text-brand-light hover:text-white transition-colors">niptao.com</a></span>
            </div>
        </footer>`;
    }
}

customElements.define('site-footer', SiteFooter);
