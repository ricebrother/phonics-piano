const PHONETIC_MAP = {
    'a': 'æ', 'e': 'e', 'i': 'ɪ', 'o': 'ɒ', 'u': 'ʌ',
    'oo': 'ʊ', 'ou': 'aʊ',
    'ae': 'eɪ', 'ee': 'iː', 'ie': 'aɪ', 'oe': 'əʊ', 'ue': 'juː', 'ue2': 'jʊ', 'oo2': 'uː',
    'oi': 'ɔɪ', 'oi2': 'ɒɪ', 'ee2': 'i',
    'ar': 'ɑː', 'or': 'ɔː', 'er': 'ɜː',
    'air': 'eə', 'eer': 'ɪə', 'oor': 'ʊə',
    '0': 'ə',
    'p': 'p', 'b': 'b', 't': 't', 'd': 'd',
    'c': 'k', 'g': 'g',
    'f': 'f', 'v': 'v', 's': 's', 'z': 'z',
    'th': 'θ', 'th2': 'ð',
    'h': 'h', 'r': 'r', 'l': 'l', 'm': 'm', 'n': 'n', 'ng': 'ŋ',
    'sh': 'ʃ', 'si': 'ʒ', 'ch': 'tʃ', 'j': 'dʒ',
    'tr': 'tr', 'dr': 'dr', 'ts': 'ts', 'dz': 'dz',
    'w': 'w', 'y': 'j', 'ks': 'ks'
};

const PHONETIC_TO_KEY_MAP = {};
for (let key in PHONETIC_MAP) {
    const phonetic = PHONETIC_MAP[key];
    PHONETIC_TO_KEY_MAP[phonetic] = key;
}

PHONETIC_TO_KEY_MAP['ɡ'] = 'g';

const SOUND_TYPE_MAP = {
    'i': 1, 'ɪ': 1, 'e': 1, 'æ': 1, 'ɑː': 1, 'ɒ': 1, 'ɔː': 1, 'ʊ': 1, 'u': 1, 'ʌ': 1, 'ə': 1,
    'iː': 1, 'ɜː': 1, 'uː': 1,
    'eɪ': 1, 'aɪ': 1, 'ɔɪ': 1, 'ɒɪ': 1, 'əʊ': 1, 'aʊ': 1, 'ɪə': 1, 'eə': 1, 'ʊə': 1, 'juː': 1, 'jʊ': 1,
    'p': 0, 'b': 0, 't': 0, 'd': 0, 'k': 0, 'g': 0,
    'f': 0, 'v': 0, 'θ': 0, 'ð': 0, 's': 0, 'z': 0, 'ʃ': 0, 'ʒ': 0, 'h': 0,
    'm': 0, 'n': 0, 'ŋ': 0, 'l': 0, 'r': 0, 'w': 0, 'j': 0,
    'tʃ': 0, 'dʒ': 0, 'tr': 0, 'dr': 0, 'ts': 0, 'dz': 0
};

const map2 = PHONETIC_MAP;
const phoneticToKeyMap = PHONETIC_TO_KEY_MAP;
const soundTypeMap = SOUND_TYPE_MAP;
