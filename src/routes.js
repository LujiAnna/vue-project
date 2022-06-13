import HomePage from './components/HomePage.vue'
import Services from './components/Services.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import History from './components/History.vue'
import OrderingGuide from './components/OrderingGuide.vue'
import Admin from './components/Admin.vue'

export const routes = [
  // { path: '/', name: 'homePageLink', component: HomePage },
  { path: '/', name: 'homePageLink', components: {
    default: HomePage,
    "orderingGuideLink": OrderingGuide,
    "deliveryLink": Delivery,
    "historyLink": History

  } },
  { path: '/services', name: 'servicesLink', component: Services },
  // { path: '/services/:items', component: Services },
  { path: '/admin', name: 'adminLink', component: Admin, beforeEnter: (to, from, next) => {
    alert('for authorsed users only, login to continue');
    next();
  } },
  { path: '/about', name: 'aboutLink', component: About, children: [
    { path: '/contact', name: 'contactLink', component: Contact },
      // /contact www.pizzaplanet.com.contact
      // contact www.pizzaplanet.com/about/contact
    { path: '/history', name: 'historyLink', component: History },
    { path: '/delivery', name: 'deliveryLink', component: Delivery },
    { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide },
  ] },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]