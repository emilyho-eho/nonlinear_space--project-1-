const SONG_MAP = {
    'the1975(1)':      'the1975',
    'the1975(2)':      'the1975',
    'jpegmafia(1)':    'jpegmafia',
    'jpegmafia(2)':    'jpegmafia',
    'jaehyun(1)':      'jaehyun',
    'jaehyun(2)':      'jaehyun',
    'gerry(1)':        'gerryrafferty',
    'gerry(2)':        'gerryrafferty',
    'chainsmokers(1)': 'chainsmokers',
    'chainsmokers(2)': 'chainsmokers'
};

const ALL_FRAGMENTS = ['the1975', 'jpegmafia', 'jaehyun', 'gerryrafferty', 'chainsmokers'];

function getPageSong() {
    const page = window.location.pathname.split('/').pop().replace('.html', '');
    return SONG_MAP[page] || null;
}