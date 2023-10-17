import Button, { variants } from '@/app/components/Button'
import SectionTitle from '@/app/components/SectionTitle'
import React from 'react'
import * as S from './styled'

function Contact() {
  return (
    <S.Contact>
      <SectionTitle title="Contact" description="Feel free to share offer" />
      <S.Content>
        <S.Left>
          {/* <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.16)' }}
          ></iframe> */}
          <S.Notice>
            <div className="w-full px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                LOCATION
              </h2>
              <p className="mt-1">Ukraine, Kyiv</p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                EMAIL
              </h2>
              <a className="text-orange-400 leading-relaxed" href="mailto:">
                sillyas2010@gmail.com
              </a>
            </div>
          </S.Notice>
        </S.Left>
        <S.Right>
          <div className="relative mb-4">
            <S.Label htmlFor="name">Name</S.Label>
            <S.Input type="name" id="name" name="name" />
          </div>
          {/* <div className="relative mb-4">
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input type="email" id="email" name="email" />
          </div> */}
          <div className="relative mb-4">
            <S.Label htmlFor="subject">Subject</S.Label>
            <S.Input type="text" id="subject" name="subject" />
          </div>
          <div className="relative mb-4">
            <S.Label htmlFor="message">Message</S.Label>
            <S.TextArea id="message" name="message" />
          </div>
          <S.ButtonWrapper>
            <Button
              $isFull
              $variant={variants.primary}
              href="mailto:test@test.com"
            >
              Contact
            </Button>
          </S.ButtonWrapper>
          <S.FormInfo>
            Form submit will trigger opening your email client with predefined
            values.
          </S.FormInfo>
        </S.Right>
      </S.Content>
    </S.Contact>
  )
}

export default Contact
