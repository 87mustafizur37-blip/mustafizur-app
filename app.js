const defaults = {
  posts: [
    {title:"নবীন থেকে নির্মাতা",description:"সময়, স্বপ্ন, চরিত্র, দ্বীন, জ্ঞান ও দক্ষতা নিয়ে আলিম জীবনের পথচলার ভাবনা।",url:""},
    {title:"শব্দের ভেতর অনুভব",description:"কবিতা, সাহিত্য ও জীবনের ছোট ছোট উপলব্ধির জন্য এই জায়গা।",url:""}
  ],
  books: [
    {title:"আমার বইয়ের সংগ্রহ",description:"এখানে নিজের বই ও PDF-এর লিংক যুক্ত করা যাবে।",url:""}
  ],
  media: [
    {title:"ভিডিও ও আবৃত্তি",description:"নিজের ভিডিও, অডিও বা প্রকাশিত কনটেন্টের লিংক যোগ করো।",url:""}
  ],
  notices: [
    {title:"স্বাগতম",description:"Mustafizur Rahman অ্যাপের প্রথম সংস্করণে স্বাগতম। নতুন আপডেট এখানে প্রকাশিত হবে।",url:""}
  ]
};
const storeKey="mr_app_content_v1";
const readData=()=>{try{return JSON.parse(localStorage.getItem(storeKey))||structuredClone(defaults)}catch{return structuredClone(defaults)}};
let data=readData();
const save=()=>localStorage.setItem(storeKey,JSON.stringify(data));
const esc=s=>String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function renderList(id,key){
 const el=document.getElementById(id),items=data[key]||[];
 el.innerHTML=items.length?items.map(x=>`<article class="content-card"><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p>${x.url?`<a href="${esc(x.url)}" target="_blank" rel="noopener">খুলে দেখো ↗</a>`:""}</article>`).join(""):`<div class="empty">এখনো কোনো কনটেন্ট যোগ করা হয়নি। অ্যাডমিন প্যানেল থেকে যোগ করা যাবে।</div>`;
}
function render(){renderList("posts","posts");renderList("books","books");renderList("mediaItems","media");renderList("noticeItems","notices")}
render();
const theme=localStorage.getItem("mr_theme");
if(theme==="light")document.body.classList.add("light");
document.getElementById("themeToggle").addEventListener("click",()=>{document.body.classList.toggle("light");localStorage.setItem("mr_theme",document.body.classList.contains("light")?"light":"dark")});
const $=id=>document.getElementById(id);
const adminLogin=$("adminLogin"),adminTools=$("adminTools");
const getPin=()=>localStorage.getItem("mr_admin_pin")||"2468";
$("loginBtn").addEventListener("click",()=>{if($("adminPin").value===getPin()){adminLogin.classList.add("hidden");adminTools.classList.remove("hidden");$("loginError").textContent=""}else $("loginError").textContent="PIN সঠিক হয়নি। আবার চেষ্টা করো।"});
$("adminPin").addEventListener("keydown",e=>{if(e.key==="Enter")$("loginBtn").click()});
$("logoutBtn").addEventListener("click",()=>{adminTools.classList.add("hidden");adminLogin.classList.remove("hidden");$("adminPin").value=""});
$("addItemBtn").addEventListener("click",()=>{const key=$("contentType").value,title=$("itemTitle").value.trim(),description=$("itemDescription").value.trim(),url=$("itemUrl").value.trim();if(!title){$("adminMessage").textContent="শিরোনাম লিখতে হবে।";return}if(url&&!/^https?:\/\//i.test(url)){ $("adminMessage").textContent="লিংক https:// দিয়ে শুরু করো।";return}data[key].unshift({title,description,url});save();render();$("itemTitle").value="";$("itemDescription").value="";$("itemUrl").value="";$("adminMessage").textContent="কনটেন্ট যোগ হয়েছে।"});
$("changePinBtn").addEventListener("click",()=>{const p=$("newPin").value.trim();if(!/^\d{4,10}$/.test(p)){$("adminMessage").textContent="PIN ৪ থেকে ১০ সংখ্যার হতে হবে।";return}localStorage.setItem("mr_admin_pin",p);$("newPin").value="";$("adminMessage").textContent="এই ডিভাইসে PIN পরিবর্তন হয়েছে।"});
$("contactForm").addEventListener("submit",e=>{e.preventDefault();const n=$("senderName").value.trim(),m=$("senderMessage").value.trim();const subject=encodeURIComponent("Mustafizur Rahman App থেকে বার্তা");const body=encodeURIComponent("প্রেরক: "+n+"\n\n"+m);window.location.href="mailto:?subject="+subject+"&body="+body});
