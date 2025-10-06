// interactions: modal onboarding + CTAs
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const earlyBtn = document.getElementById('earlyBtn');
  const loginBtn = document.getElementById('loginBtn');
  const closeModal = document.getElementById('closeModal');
  const cancelModal = document.getElementById('cancelModal');
  const buyStarter = document.getElementById('buyStarter');
  const buyPro = document.getElementById('buyPro');
  const buyAgency = document.getElementById('buyAgency');

  function openModal(){ modal.classList.remove('hidden'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
  function closeModalFn(){ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow='auto'; }

  if(earlyBtn) earlyBtn.addEventListener('click', (e)=>{ e.preventDefault(); openModal(); });
  if(loginBtn) loginBtn.addEventListener('click', ()=>{ alert('Login & account features coming soon — early access first.'); });
  if(closeModal) closeModal.addEventListener('click', closeModalFn);
  if(cancelModal) cancelModal.addEventListener('click', closeModalFn);

  // Onboard form
  window.handleOnboard = function(e){
    e.preventDefault();
    const company = document.getElementById('company').value.trim();
    const competitor1 = document.getElementById('competitor1').value.trim();
    const email = document.getElementById('emailOnboard').value.trim();
    // TODO: replace with real webhook to GHL or Netlify function
    alert(`Invite requested for ${company}. We will contact ${email} with next steps.`);
    e.target.reset();
    closeModalFn();
    return false;
  };

  // Contact form placeholder
  window.handleContact = function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    alert(`Thanks ${name}! We'll reply to ${email} within 24 hours.`);
    e.target.reset();
    return false;
  };

  // Pricing CTA hooks (replace with real GHL checkout links)
  if(buyStarter) buyStarter.addEventListener('click', (e)=>{ e.preventDefault(); alert('Starter plan selected. Connect Stripe checkout via GHL to activate.'); });
  if(buyPro) buyPro.addEventListener('click', (e)=>{ e.preventDefault(); alert('Pro plan selected. Connect Stripe checkout via GHL to activate.'); });
  if(buyAgency) buyAgency.addEventListener('click', (e)=>{ e.preventDefault(); alert('Contact sales: hello@twintrackbiz.com (placeholder)'); });

  // small parallax on scroll for radar
  const radar = document.querySelector('.radar-wrap');
  window.addEventListener('scroll', () => {
    if(!radar) return;
    const rect = radar.getBoundingClientRect();
    const mid = window.innerHeight/2;
    const diff = (rect.top - mid) * -0.02;
    radar.style.transform = `translateY(${diff}px)`;
  });
});
