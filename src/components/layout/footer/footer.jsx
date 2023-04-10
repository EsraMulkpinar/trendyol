import React from 'react'

const Footer = () => {
  return (
   <div className="">
    <div className="w-full bg-black">
    <div className='flex justify-between max-w-[1200px] mx-auto p-16  text-white'>
      <div className="flex flex-col text-start justify-around h-[300px]">
        <a className="cursor-pointer text-xl hover:underline">Trendyol</a>
        <a className="cursor-pointer text-sm hover:underline">Biz Kimiz</a>
        <a className="cursor-pointer text-sm hover:underline">Kariyer</a>
        <a className="cursor-pointer text-sm hover:underline">İletişim</a>
        <a className="cursor-pointer text-sm hover:underline">Trendyol'da Satış Yap</a>
        <a className="cursor-pointer text-base hover:underline">Güvenli Alışveriş</a>
        <div className="flex justify-center items-center ">
          <a className="">
            <img className='w-14 h-7 cursor-pointer object-cover' src="https://cdn.dsmcdn.com/frontend/web/assets/images/troy-logo-transparent.png" alt="" />
          </a>
          <div className="">
            <img className='w-16 h-9 cursor-pointer object-contain' src="https://cdn.dsmcdn.com/web/production/footer-master-card.png" alt="" />
          </div>
          <div className="">
            <img className='w-20 h-6 cursor-pointer object-cover' src="https://cdn.dsmcdn.com/web/production/footer-visa-black.png" alt="" />
          </div>
          <div className="">
            <img className='w-16 h-6 cursor-pointer object-cover' src="https://cdn.dsmcdn.com/web/production/footer-amex.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-start justify-around h-[400px]">
        <a className="cursor-pointer text-xl hover:underline">About us</a>
        <a className="cursor-pointer text-sm hover:underline">Who we are</a>
        <a className="cursor-pointer text-sm hover:underline">Careers</a>
        <a className="cursor-pointer text-sm hover:underline">Contact us</a>
        <a className="cursor-pointer text-sm hover:underline">Sustainability</a>
        <a className="cursor-pointer text-base hover:underline">Mobil Uygulamalar</a>
        <div className="">
          <a href="">
            <img className='mb-2' src="	https://cdn.dsmcdn.com/web/production/iosV2.svg" alt="" />
          </a>
          <a href="">
          <img className='mb-2' src="https://cdn.dsmcdn.com/web/production/googleV2.svg" alt="" />
          </a>
          <a href="">
          <img src="https://cdn.dsmcdn.com/web/production/huaweiV2.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="flex flex-col text-start justify-around h-[300px]">
        <a className="cursor-pointer text-xl hover:underline">Kampanyalar</a>
        <a className="cursor-pointer text-sm hover:underline">Aktif Kampanyalar</a>
        <a className="cursor-pointer text-sm hover:underline">Elite Üyelik</a>
        <a className="cursor-pointer text-sm hover:underline">Hediye Fikirleri</a>
        <a className="cursor-pointer text-sm hover:underline">Trendyol Fırsatları</a>
        <a className="cursor-pointer text-base hover:underline">Sosyal Medya</a>
        <div className="flex space-x-1">
          <a href='https://www.facebook.com/Trendyol'>
            <img className='w-7 h-8' src="https://cdn.dsmcdn.com/web/production/facebookV2.svg" alt="" />
          </a>
          <a href='https://www.instagram.com/trendyolcom/'>
            <img className='w-7 h-8' src="https://cdn.dsmcdn.com/web/production/instagramV2.svg" alt="" />
          </a>
          <a href='https://twitter.com/trendyol'>
            <img className='w-7 h-8' src="https://cdn.dsmcdn.com/web/production/twitterV2.svg" alt="" />
          </a>
          <a href='https://www.youtube.com/trendyol'>
             <img className='w-7 h-8' src="https://cdn.dsmcdn.com/web/production/youtubeV2.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="flex flex-col text-start justify-around h-[365px]">
        <a className="cursor-pointer text-xl hover:underline">Yardım</a>
        <a className="cursor-pointer text-sm hover:underline">Sıkça Sorulan Sorular</a>
        <a className="cursor-pointer text-sm hover:underline">Canlı Yardım</a>
        <a className="cursor-pointer text-sm hover:underline">Nasıl İade Edebilirim</a>
        <a className="cursor-pointer text-sm hover:underline">İşlem Rehberi</a>
        <a className="cursor-pointer text-sm text-center rounded-md border w-24">Ülke Değiştir</a>
        <div className="flex space-x-4">
          <a href='https://www.eticaret.gov.tr/siteprofil/305B30787EA6409BBF6EFBEA3D437B96/wwwtrendyolcom' className="p-1 bg-white">
            <img className='w-[83px] h-24 object-contain' src="https://cdn.dsmcdn.com/web/production/etbis-qr.png" alt="" />
          </a>
          <a href='https://www.guvendamgasi.org.tr/firmadetay.php?Guid=8e69c8c5-2f03-11ea-8718-48df373f4850' className="mt-4">
            <img className='h-12' src="https://cdn.dsmcdn.com/frontend/web/assets/images/trust-stamp.png" alt="" />
          </a>
        </div>
      </div>
      
    </div>
    </div>
   <div className=" bg-grayBgColor">
   <div className="max-w-[1080px] m-auto text-white text-xs font-medium flex py-2 justify-between">
    <div className="">
    ©2023 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.
    </div>
    <div className="space-x-4">
      <a href="">Çerez Tercihleri</a>
      <a href="">Kullanım Koşulları</a>
      <a href="">DSM Grup</a>
      <a href="">KVK ve Gizlilik Politikası</a>
    </div>
    </div>
   </div>
   </div>

  )
}

export default Footer