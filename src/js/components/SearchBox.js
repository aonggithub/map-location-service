import React from 'react';

class SearchBox extends React.Component {
  render() {
    return (
      <input ref={(input) => {this.text = input;}}
        {...this.props}
        type="text"/>
    )
  }
  onPlacesChanged() {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }
  componentDidMount() {
    var input = this.text;
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    this.searchBox.removeListener('places_changed', this.onPlacesChanged);
  }
}

SearchBox.propTypes = {
  placeholder: React.PropTypes.string,
  onPlacesChanged: React.PropTypes.func
}

export default SearchBox
