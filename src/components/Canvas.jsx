import React, { Component } from 'react';

class DrawingApp extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.isDrawing = false;
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.6;
    this.ctx = canvas.getContext('2d');
  }

  startDrawing = (e) => {
    this.isDrawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(e.clientX - this.canvasRef.current.offsetLeft, e.clientY - this.canvasRef.current.offsetTop);
  };

  continueDrawing = (e) => {
    if (!this.isDrawing) return;
    this.ctx.lineTo(e.clientX - this.canvasRef.current.offsetLeft, e.clientY - this.canvasRef.current.offsetTop);
    this.ctx.stroke();
  };

  stopDrawing = () => {
    this.isDrawing = false;
  };

  clearCanvas = () => {
    this.ctx.clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
  };

  render() {
    return (
      <div>
        <canvas
          ref={this.canvasRef}
          onMouseDown={this.startDrawing}
          onMouseMove={this.continueDrawing}
          onMouseUp={this.stopDrawing}
          onMouseLeave={this.stopDrawing}
        />
        <button onClick={this.clearCanvas}>Clear Canvas</button>
      </div>
    );
  }
}

export default DrawingApp;
