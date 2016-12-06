require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react'; 

var imageDatas = require('json!../images/imageDatas.json');


//利用子执行函数，将图片名信息转成图片路径信息
imageDatas = (function genImageUrl(imageDatasArr) {
	for (var i = 0; i < imageDatas.length; i++) {
		var singleImageData = imageDatas[i];
		singleImageData.imageUrl = require("../images/" + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      // <div className="index">
      //   <img src={imageDatas[0].imageUrl} alt="Yeoman Generator" />
      //   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      //   <span>Hello</span>
      // </div>
      <section className="stage">
      	<section className="img-sec">
      	</section>
      	<nav className="controller-nav">
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
