import React, { ReactChild, ReactNode, Component } from 'react';
import { Card } from '../components/Card';
import * as Placeholder from './Placeholder';
import { Section } from '../components/Section';
import '../stylesheets/Heading.css';

const { GenericP, GenericP2, GenericMediaCtr } = Placeholder;

const AboutCard = (
  <Card
    className='card--basic'
  >
    {{
      header: (null),
      content: (
        [GenericP]
      )
    }}
  </Card>
)


const AboutSec = (
  <Section
    className='section--bg-transparent section--double-col'
    qtyColumns={2}
  >
    {
      {
        header: (
          <h2
            className='heading--main'
          >
            About This Page
          </h2>
        ),
        media: (
          GenericMediaCtr
        ),
        card: (AboutCard)
      }
    }
  </Section>
)

export { AboutCard, AboutSec }