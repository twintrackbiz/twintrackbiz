// Basic UX interactions for CTAs, modal, contact handlers
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const startBtn = document.getElementById('startBtn');
  const loginBtn = document.getElementById('loginBtn');
  const sampleBtn = document.getElementById('sampleBtn');
  const closeModal = document.getElementById('closeModal');
  const cancelModal = document.getElementById('cancelModal');

  function openModal(){ modal.classList.remove('hidden'); modal.setAttribute('aria-hidden','false') }
  function closeModalFn(){ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true') }

  startBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
  sampleBtn.addEventListener('click', (e) => { /* anchor scroll default */ });
  loginBtn.addEventListener('click', () => { alert('Login / account management will be available after signup.'); });

  if(closeModal) closeModal.addEventListener('click', closeModalFn);
  if(cancelModal) cancelModal.addEventListener('click', closeModalFn);

  // contact form placeholder (replace action with GHL webhook or email)
  window.handleContact = function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    alert(`Thanks ${name}! We received your message and will reply to ${email}.`);
    e.target.reset();
    return false;
  };

  // onboarding modal form placeholder (connect to GHL checkout later)
  window.handleOnboard = function(e){
    e.preventDefault();
    const company = document.getElementById('company').value.trim();
    const competitor1 = document.getElementById('competitor1').value.trim();
    const email = document.getElementById('emailOnboard').value.trim();
    // TODO: Replace with real webhook to GHL or serverless endpoint
    alert(`Great — we've recorded ${company}. A confirmation will be sent to ${email}. (This is a demo onboarding form.)`);
    e.target.reset();
    closeModalFn();
    return false;
  };

  // Pricing CTA hooks (replace with real checkout links)
  document.getElementById('buyStarter').addEventListener('click', (e)=>{ e.preventDefault(); alert('Starter plan selected. Next: connect Stripe checkout via GHL.')});
  document.getElementById('buyPro').addEventListener('click', (e)=>{ e.preventDefault(); alert('Pro plan selected. Next: connect Stripe checkout via GHL.')});
  document.getElementById('buyAgency').addEventListener('click', (e)=>{ e.preventDefault(); alert('Contact sales: email hello@twintrackbiz.com (placeholder)')});
});
