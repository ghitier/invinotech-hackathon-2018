import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from './react-simple-chatbot/lib';
import Carousel from 'nuka-carousel';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Verdana, Geneva, sans-serif',
  headerBgColor: '#0084ff',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0084ff',
  botFontColor: '#fff',
  userBubbleColor: '#d8dfea',
  userFontColor: '#4a4a4a',
};

function ImgBubble(props) {
  return (
    <img style={{ width: '100%', height: '100%' }}
      src="https://wallpaperlayer.com/img/2015/10/warm-sunshine-wallpaper-7492-7782-hd-wallpapers.jpg" />
  );
}

export default function Chatbot() {
  return (
    <ThemeProvider theme={theme}>
    <ChatBot
    botAvatar='/Logo.jpg'
    botDelay={800} userDelay={800} customDelay={800}
    hideUserAvatar={true} hideBotAvatar={false}
    customStyle={{
      color: theme.botFontColor,
      borderRadius: '18px',
    }}
    steps={steps} handleEnd={({ steps, values }) => {
    }} />
</ThemeProvider>);
}

/*
{
      id: 'youtube',
      component: (
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/l40lYanPp5E?showinfo=0&rel=0"
          frameBorder="0" allowFullScreen />
      ),
      trigger: '2',
    },
*/

class Shapes extends React.Component {
  render () {
    return (
    <Carousel cellAlign='center' dragging={true} swiping={true}>
        <img style={{width: '100%', height: '100%'}} src="https://cdn.pixabay.com/photo/2013/03/14/21/31/icicle-93727_1280.jpg"/>
      <img src="http://www4.ac-nancy-metz.fr/base-geol/203/klang_gypse.jpg"/>
      <img src="https://dailygeekshow.com/wp-content/uploads/2016/05/Volcan-1.jpg"/>
    </Carousel>
  );
  }
}

const steps = [
  {
    id: 'intro',
    message: 'Le terroir introduit une solution différente dans les vins en fonction du sol. Nous allons vous aider à devenir la texture et l\'architecture du vin',
    trigger: 'shapes',
  },
  {
    id: 'shapes',
    component: <Shapes />,
    trigger: 'scan',
  },
  {
    id: 'scan',
    options: [
      { value: 'scan', label: 'Scannez un vin', trigger: 'scan_result'},
    ],
    trigger: 'scan_result',
  },
  {
    id: 'scan_result',
    component: <img src="http://www.marceldeiss.com/159-229-home/rotenberg-2007.jpg" />,
    trigger: 'scan_result_text',
  },
  {
    id: 'scan_result_text',
    message: 'ROTENBERG 2013 "LA COLLINE ROUGE" Marcel DEISS',
    trigger: 'nose',
  },
  {
    id: 'nose',
    message: 'Au nez,',
    trigger: 'nose_atmosphere',
  },
  {
    id: 'nose_atmosphere',
    message: 'Comment percevez-vous l\'atmosphère de ce vin ?',
    trigger: 'nose_atmosphere_options',
  },
  {
    id: 'nose_atmosphere_options',
    options: [
      { value: 'warm', label: 'Chaud', trigger: 'mouth'},
      { value: 'cool', label: 'Froid', trigger: 'mouth'},
    ],
  },
  {
    id: 'mouth',
    message: 'En bouche',
    trigger: 'mouth_salivation',
  },
  {
    id: 'mouth_salivation',
    message: 'Ce vin provoque-t-il une salivation ?',
    trigger: 'mouth_salvation_options',
  },
  {
    id: 'mouth_salvation_options',
    options: [
      { value: 'yes', label: 'Oui', trigger: 'mouth_salivation_shape'},
      { value: 'no', label: 'Non', trigger: 'mouth_salivation_shape'},
    ]
  },
  {
    id: 'mouth_salivation_shape',
    message: 'Quelle forme prend-elle ?',
    trigger: 'shapes',
  },
  {
    id: 'shapes',
    component: <Shapes />,
    trigger: 'mouth_salivation_shape_options',
  },
  {
    id: 'mouth_salivation_shape_options',
    options: [
      { value: 'vertical', label: 'Verticale', trigger: 'mouth_texture_a'},
      { value: 'horizontal', label: 'Horizontale', trigger: 'mouth_texture_ab'},
      { value: 'explosive', label: 'Explosive', trigger: 'mouth_texture_ab'},
    ],
  },
  {
    id: 'mouth_texture_a',
    message: 'Quelle est la texture de la matière en bouche ?',
    trigger: 'mouth_texture_options_a'
  },
  {
    id: 'mouth_texture_options_a',
    options: [
      { value: 'thin_fluid', label: 'Fin et fluide', trigger: 'mouth_length'},
      { value: 'thick_fatty', label: 'Epais / gras', trigger: 'mouth_length'},
    ],
  },
  {
    id: 'mouth_texture_ab',
    message: 'Quelle est la texture de la matière en bouche ?',
    trigger: 'mouth_texture_options_ab_1'
  },
  {
    id: 'mouth_texture_options_ab_1',
    options: [
      { value: 'thin_fluid', label: 'Fin et fluide', trigger: 'mouth_texture_options_ab_2'},
      { value: 'thick_fatty', label: 'Epais / gras', trigger: 'mouth_texture_options_ab_2'},
    ],
  },
  {
    id: 'mouth_texture_options_ab_2',
    options: [
      { value: 'smooth_silky', label: 'Lisse / soyeux', trigger: 'mouth_length'},
      { value: 'velour', label: 'Velour', trigger: 'mouth_length'},
      { value: 'rough', label: 'Rugeux, granuleux', trigger: 'mouth_length'},
    ],
  },
  {
    id: 'mouth_length',
    message: 'Quelle est la persistance en bouche ?',
    trigger: 'mouth_length_options',
  },
  {
    id: 'mouth_length_options',
    options: [
      { value: 'short', label: 'Court', trigger: 'end'},
      { value: 'long', label: 'Long', trigger: 'end'},
    ],
  },
  {
    id: 'end',
    message: 'Fin de la dégustation',
    end: true,
  }
];
