import React from 'react'
import { WhatsappShareButton,WhatsappIcon,TelegramShareButton,TelegramIcon,FacebookShareButton,FacebookIcon,RedditShareButton,RedditIcon,EmailShareButton,EmailIcon } from 'react-share'
function Sharebox({data}) {
    const iconsize = 48;
    // onShareWindowClose={}
  return (
    <div className='bg-slate-900 h-full flex justify-evenly py-3 rounded-xl '>
      <div>
      <WhatsappShareButton url={data.link} title={data.title}  separator=' ' ><WhatsappIcon round size={iconsize}/></WhatsappShareButton>
      </div>
      <div>
        <TelegramShareButton  url={data.link} title={data.title} ><TelegramIcon round size={iconsize}/></TelegramShareButton>
      </div>
      <div>
        <FacebookShareButton url={data.link} quote={data.title} hashtag='#chimes'><FacebookIcon round size={iconsize}/></FacebookShareButton>
      </div>
      <div>
        <RedditShareButton url={data.link} title={data.title}><RedditIcon round size={iconsize}/></RedditShareButton>
      </div>
      <div>
        <EmailShareButton url={data.link} subject={data.title}><EmailIcon round size={iconsize}/></EmailShareButton>
      </div>
    </div>
  )
}

export default Sharebox