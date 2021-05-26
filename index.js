class Imagemap extends React.Component {
  render() {
    const { imagemap } = this.props;
    return (
      <div className="message__image map">
        <img src={imagemap.imageurl} alt={imagemap.imageurl} />
      </div>
    );
  }
}
class CarouselItem extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div className="message__carousel">
        <div className="carousel__img" style={{ backgroundImage: `url(${items.imageUrl})` }}></div>
        <p className="carousel__title">{items.title}</p>
        <p className="carousel__text">{items.desc}</p>
        <div className="carousel__button">
          {
            items.buttons.map((item, idx) => <div key={idx}>{item.title}</div>)
          }
        </div>
      </div>
    );
  }
}
class Carousel extends React.Component {
  render() {
    const { carousel } = this.props;
    return (
      <div className="carousel">
        {
          carousel.map((item, idx) =>
            <CarouselItem key={idx} items={item} />
          )
        }
      </div>
    );
  }
}
class Videos extends React.Component {
  render() {
    const { video } = this.props;
    return (
      <div className="message__video">
        <video width="200" controls>
          <source src={video.video} type="video/mp4" />
          {/* <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" /> */}
          {/* <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" /> */}
          Your browser does not support HTML video.
                </video>
        <div className="video--bg" style={{ backgroundImage: `url(${video.videoimg})` }}>
          <div className="video--mask">
            <svg role="presentation" x="0" y="0" width="25" height="25" viewBox="0 0 30.051 30.051" fill="#FFF"><path d="M19.982,14.438l-6.24-4.536c-0.229-0.166-0.533-0.191-0.784-0.062c-0.253,0.128-0.411,0.388-0.411,0.669v9.069   c0,0.284,0.158,0.543,0.411,0.671c0.107,0.054,0.224,0.081,0.342,0.081c0.154,0,0.31-0.049,0.442-0.146l6.24-4.532   c0.197-0.145,0.312-0.369,0.312-0.607C20.295,14.803,20.177,14.58,19.982,14.438z"></path><path d="M15.026,0.002C6.726,0.002,0,6.728,0,15.028c0,8.297,6.726,15.021,15.026,15.021c8.298,0,15.025-6.725,15.025-15.021   C30.052,6.728,23.324,0.002,15.026,0.002z M15.026,27.542c-6.912,0-12.516-5.601-12.516-12.514c0-6.91,5.604-12.518,12.516-12.518   c6.911,0,12.514,5.607,12.514,12.518C27.541,21.941,21.937,27.542,15.026,27.542z"></path></svg>
          </div>
        </div>
      </div>
    );
  }
}
class Images extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <div className="message__image">
        <img src={image} alt={image} />
      </div>
    );
  }
}
class Text extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className="message__text">
        <div>{text}</div>
      </div>
    );
  }
}
class Console extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="message">
        <div className="message__avatar" style={{backgroundColor: data.botSender && "#333", backgroundImage: `url(${data.botSender.botSenderIconUrl})`, backgroundPosition: "center", backgroundSize: "cover"}}></div>
        {(data.type === 'text') && <Text text={data.content} />}
        {(data.type === 'image') && <Images image={data.content} />}
        {(data.type === 'video') && <Videos video={data.content} />}
        {(data.type === 'carousel') && <Carousel carousel={data.content.slides} />}
        {(data.type === 'imagemap') && <Imagemap imagemap={data.content} />}
      </div>
    );
  }
}

class Reply extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="message__reply">
        {data.items.map((item, idx) => <p key={idx}>{item.action.title}</p>)}
      </div>
    );
  }
}

function Layout(props) {
  const { msgInfo } = props.msgInfo;
  return (
    <div className="console">
      <div className="console__content">
        <div className="console__item">
          {msgInfo.map((msg, idx) => msg.type === 'quickReply' ? <Reply key={idx} data={msg.content} /> : <Console key={idx} data={msg} />)}
        </div>
      </div >
    </div >
  );
}

var state = {
  "msgInfo": [
    {
      "type": "text",
      "content": "123",
      "botSender": {
        "botSenderId": "2",
        "botSenderName": "Mikasa",
        "botSenderIconUrl": "/assets/images/avatar/avatar-cat.png"
      }
    },
    {
      "type": "imagemap",
      "content": {
        "ImagemapPicSize": "",
        "ImagemapModelType": "m6",
        "previewMsg": "a",
        "ImagemapContent": {
          "type": "imagemap",
          "baseUrl": "PROVIDE_URL_FROM_YOUR_SERVER",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": [
            {
              "type": "message",
              "area": {
                "x": 0,
                "y": 0,
                "width": 520,
                "height": 1040
              },
              "text": "aa",
              "keywordValue": "aa"
            },
            {
              "type": "message",
              "area": {
                "x": 520,
                "y": 0,
                "width": 520,
                "height": 1040
              },
              "text": "bb"
            }
          ]
        }
      },
      "botSender": {
        "botSenderId": "1",
        "botSenderName": "預設",
        "botSenderIconUrl": "/assets/images/avatar/avatar-ogilvy.svg"
      }
    },
    {
      "type": "carousel",
      "content": {
        "imgAspectRatio": "square",
        "previewMsg": "b",
        "slides": [
          {
            "imageUrl": "http://localhost:8888/msgPushImg/2021-05-20/1621491579.png",
            "title": "1",
            "desc": "11",
            "buttons": [
              {
                "title": "1a",
                "action": "postback",
                "content": "1aaa",
                "keywordValue": "postback-IjgZyGjO-1621491596405"
              }
            ]
          }
        ]
      },
      "botSender": {
        "botSenderId": "3",
        "botSenderName": "Eren",
        "botSenderIconUrl": "/assets/images/avatar/avatar-dog.png"
      }
    }
  ]
};

ReactDOM.render(<Layout msgInfo={state} />, document.getElementById('root'));

function createReact(_val) {
  ReactDOM.render(<Layout msgInfo={_val} />, document.getElementById('root'));
}