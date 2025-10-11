import styled from 'styled-components';
import { media } from 'utils/media';

export default function Map() {
  return (
    <MapWrapper>
      <MapAdress
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4743.46643031608!2d36.90661038861892!3d-1.3172675564294558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f133ff29164a5%3A0x2dd7020b2b3662fd!2sSaku%20Business%20Park!5e0!3m2!1sen!2ske!4v1694587866444!5m2!1sen!2ske"
        width="600"
        height="450"
        loading="eager"
      ></MapAdress>
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  display: flex;
  width: 100%;
  ${media('<=desktop')} {
    width: 100%;
  }
`;
const MapAdress = styled.iframe`
  border: none;
  width: 100%;
`;
