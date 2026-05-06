class SiteFooter extends HTMLElement {
    connectedCallback() {
        const isHome = this.getAttribute('page') === 'home';
        const extraLinks = isHome
            ? `<a href="/pilot.html" class="hover:text-white transition-colors">Pilot Offer</a>
               <a href="/#faq" class="hover:text-white transition-colors">FAQ</a>
               <a href="/#work" class="hover:text-white transition-colors">Our Work</a>`
            : `<a href="/" class="hover:text-white transition-colors">Home</a>`;

        this.innerHTML = `
        <footer class="bg-gray-900 text-gray-400 py-12 px-5${isHome ? '' : ' mt-16'}">
            <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <div class="text-white font-bold text-lg">Publif<span class="text-brand-light">ai</span></div>
                    <p class="text-sm mt-1">Websites for small businesses, built on WhatsApp.</p>
                    <p class="text-xs mt-2 text-gray-500">A venture by <a href="https://hcode.tech" target="_blank" class="hover:text-white transition-colors">HCode Technologies</a> &amp; <a href="https://paytunes.in" target="_blank" class="hover:text-white transition-colors">PayTunes</a></p>
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
