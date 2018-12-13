import * as React from "react";
import { Button } from 'reactstrap';

export class DownloadButton extends React.Component<any, {}> {

  onDownload = (event: React.MouseEvent<HTMLElement>) => {
    fetch(this.props.download).then(response => {
      const json = response.json();
      return json
    }).then(json => {
      // Create a hidden 'a' element; click it and remove it
      let blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
      let hiddenElement = document.createElement('a');
      document.body.appendChild(hiddenElement);
      hiddenElement.href = window.URL.createObjectURL(blob);
      let filename = this.props.download.split('/').pop()
      let [name, extension] = filename.split('.')
      let new_filename = name + '-' + this.props.feature + '.' + extension
      hiddenElement.setAttribute('download', new_filename);
      hiddenElement.style.display = 'none';
      hiddenElement.click();
      document.body.removeChild(hiddenElement);
    });
  }

  render() {
    const margin_style = {
      border: '#aaa',
      borderRadius: '5px',
      borderStyle: 'solid',
      borderWidth: '2px',
      paddingLeft: '5px',
      paddingRight: '5px',
      marginTop: '15px'
    };

    return (
      <div className='text-center'>
        <Button outline color='secondary' onClick={ this.onDownload } style={margin_style}>Download</Button>
      </div>
    );
  }
}
