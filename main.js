let whiteDomain = [
  'stackoverflow.com',
  'api-02.worldsms.vn',
  'mail.google.com',
  'open.spotify.com',
  'mvc.worldsms.vn',
  'github.com',
  'smsmonster.worldsms.vn',
  'www.google.com',
  'www.facebook.com',
  'translate.google.com.vn',
  'admin.worldsms.vn',
  'vi.wikipedia.org',
  'ncov.moh.gov.vn',
  'jira.worldfone.vn',
  '192.168.16.161',
  'worldsms.vn',
  'jira.southtelecom.vn',
  'git.southtelecom.vn',
  'kbpay.kingbee.vn',
  '192.168.16.139',
  '192.168.16.181',
  'paiza.io'
]

let classArray = [
  'icon_logo_menu',// nhaccuatui.com
  'z-logo', // mp3.zing.vn
  'logo',
  'logo-img-small',
  'nav-link home',
  'content-header-item', // howKTeam
  'main-navbar__logo', 'organization-container', 'post-actions', 'post-body__right', 'main-navbar__group', // Viblog
  'navbar-brand', // tiepphan
  'topbar-logo-link', // swagger
  'brand-logo', 'v-navigation-drawer__content', // Nhan hoa
  '_3x54 _8-_k _3-99', '_57f', // facebook
  'suite-lockup-brand', // analytic
  'gb_2c', 'eOJ7Ue', 'gb_He gb_Fe', // search console
  'footer-additional', // gtv-seo
  'banner-qc',
  'Header-logo', 'Header-banner', // golang
  'site-header', // codelearn
  'hello-bar-body', 'header-main__logo', 'header-main__logo', 'hello-bar-box', // geeksforgreen
  'forum-logo', // nodejs.vn
  'pure-menu-heading', // mongoose
  'title', // laradock
  'docs-title-input-label', // google docs sheet
  'header__logo', // z.com
  'yt-hub-logo', // chung khoan
  'navbar__brand', // react navtive
  'navbar-fixed-top', // https://tienganhtflat.com/
  'fixed-top'
]

let idArray = [
  'f_right_sidebar', //Freetus
  'bloglogo', 'sidebar-in', // ITViec.com
  'intro', // nodejs
  'carbonads', // mongoose
  'logo',//expressjs
  'navigation-new',// hostinger
  'bizBlackBar', // facebook developer
  'adsbgleft',
  'adsbgright',
  'secondary', //http://tienganh365.vn/
  'adminmenuwrap', // wordpress
]

let tagArray = [
  'mat-toolbar' // Angular.io
]

tagName = [
  'body',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'strong',
  'p',
  'a',
  'span',
  'ul',
  'li'
]

let domain = window.location.hostname

if (!whiteDomain.includes(domain)) {
  for (let tagItem of tagName) {
    let tags = document.getElementsByTagName(tagItem)
  
    for (let tag of tags) {
      tag.style.color = 'black'
      tag.style.fontSize = '13px'
    }
  }


  for (let classItem of classArray) {
    let classes = document.getElementsByClassName(classItem)
    if (classes) {
      for (let data of classes) {
        // data.remove()
        data.style.display = "none";
      }
    }
  }
  
  for (let idItem of idArray) {
    let id = document.getElementById(idItem)
    if (id) {
      id.remove()
    }
  }
  
  for (let tagItem of tagArray) {
    let tags = document.getElementsByTagName(tagItem)
  
    for (let tag of tags) {
      tag.remove()
    }
  }
}
