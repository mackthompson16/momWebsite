import DomeGallery from './DomeGallery';

const IMAGES = [
  { src: '/files/jpeg/78Q8222.jpg', alt: 'Photo' },
  { src: '/files/jpeg/11_x18_test_peacock_orange_teal_GH-1_moedit_printfile_2.jpg', alt: 'Peacock orange teal print' },
  { src: '/files/jpeg/1K1A8871_copy.jpg', alt: 'Photo' },
  { src: '/files/jpeg/20_x_30_DSCF0809_merrlls_flam.jpg', alt: 'Flamingo' },
  { src: '/files/jpeg/blackdiiving_straite_1K1A9248.jpg', alt: 'Black diving' },
  { src: '/files/jpeg/BWH_flooting_girl_1K1A1007-2.jpg', alt: 'Floating girl' },
  { src: '/files/jpeg/BWHPOOLLADY_SWIMMING_DRONE_20230524-DJI_0035-2-2.jpg', alt: 'Pool lady swimming drone' },
  { src: '/files/jpeg/cabi_stone-2.jpg', alt: 'Cabi stone' },
  { src: '/files/jpeg/cabi_stone-5.jpg', alt: 'Cabi stone' },
  { src: '/files/jpeg/DSC03756.jpg', alt: 'Photo' },
  { src: '/files/jpeg/dscf_9177_everglades_PS36.jpg', alt: 'Everglades' },
  { src: '/files/jpeg/image-asset_1.jpg', alt: 'Photo' },
  { src: '/files/jpeg/image-asset_2.jpg', alt: 'Photo' },
  { src: '/files/jpeg/image-asset.jpg', alt: 'Photo' },
  { src: '/files/jpeg/IMG_E4D37D23B2E4-1.jpg', alt: 'Photo' },
  { src: '/files/jpeg/Screenshot_2024-08-20_at_12.26.31_PM.jpg', alt: 'Photo' },
  { src: '/files/jpeg/Screenshot_2024-08-20_at_12.27.31_PM.jpg', alt: 'Photo' },
  { src: '/files/jpeg/Screenshot_2024-08-20_at_12.31.03_PM.jpg', alt: 'Photo' },
  { src: '/files/jpeg/Screenshot_2025-09-15_at_1.45.15_PM.jpg', alt: 'Photo' },
];

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#120F17' }}>
      <DomeGallery images={IMAGES} grayscale={false} />
    </div>
  );
}

export default App;
