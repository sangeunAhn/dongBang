import React, {Component} from 'react';
import ClubDiv from './presenter';
import * as axios from 'axios';
import PropTypes from 'prop-types';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubName: [],
      clubLogo: [],
      clubMainPicture: [],
    };
  }
  static propTypes = {
    school: PropTypes.string.isRequired,
  };

  render() {
    return <ClubDiv {...this.state} {...this.props} />;
  }

  componentWillMount = async () => {
    await this._getDatas();
  };

  _getDatas = async () => {
    const {clubName, clubLogo, clubMainPicture} = this.state;
    const {school, clubKind} = this.props;
    this.setState({school});

    // 데이터 가져오기
    await axios
      .post('http://dkstkdvkf00.cafe24.com/php/Main/FindClubs.php', {
        school: school,
        clubKind: clubKind,
      })
      .then(result => {
        const response = result.data;
        var clubNameArray = new Array();
        var clubLogoArray = new Array();
        var clubMainPictureArray = new Array();

        response.forEach(row => {
          clubNameArray.push(row.clubName);
          clubLogoArray.push(row.clubLogo);
          clubMainPictureArray.push(row.clubMainPicture);
        });

        this.setState({
          clubName: clubName.concat(clubNameArray),
          clubLogo: clubLogo.concat(clubLogoArray),
          clubMainPicture: clubMainPicture.concat(clubMainPictureArray),
        });
      });
  };
}

export default Container;
