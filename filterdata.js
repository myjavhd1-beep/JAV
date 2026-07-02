// Filter data only - no logic
const filterData = {
    actress: [
    { 
        name: "MINAMO", 
        images: [
            "https://lh3.googleusercontent.com/d/174ScSbVOs8af2eycyr77_5rH1-81fgdk",
    "https://lh3.googleusercontent.com/d/14GMcv-sbtfwPhpdIJEa9GXyGeglDqNmf",
    "https://lh3.googleusercontent.com/d/1lptb3KOXALmOr7Jz8d3ZK1iPhWXDqxCz"// Add more image URLs here
        ],
        javguru: "https://www.javguru.com/actress/minamo",
        dob: "1998-03-15",
        debut: "2017-05-20",
        measurements: "88-58-86",
        cup: "E",
        height: 160
    },
    { 
        name: "Yatsugake Umi", 
        images: [
            "https://lh3.googleusercontent.com/d/1jA4sgre6bTXNT050wzc7hGkjOOOx9uho",
    "https://lh3.googleusercontent.com/d/1mVyU-zBn_Sd_7daO_5dXImDiYCsXbyhP",
    "https://lh3.googleusercontent.com/d/1aSbh3xq09s1kvkJX6Vxyza-pDrB4S5jZ",
    "https://lh3.googleusercontent.com/d/12zSyasl9m0m49AC5AXd1pMgSwRa5jiI5",
    "https://lh3.googleusercontent.com/d/1KVr-QT4mIaXvntPIr6VR37XMbvhWHC2j",
    "https://lh3.googleusercontent.com/d/1EfjoqnEOMmVx1jkhNYIykuCDg0PXqh7x"
        ],
        javguru: "https://www.javguru.com/actress/yatsugake-umi",
        dob: "1996-07-22",
        debut: "2016-09-15",
        measurements: "85-56-83",
        cup: "D",
        height: 158
    },
    { 
        name: "Yoshitaka Nene", 
        images: [
            "https://lh3.googleusercontent.com/d/13dd8yEZuzyx5Yj31yJIdUoefj2kygQeY"
        ],
        javguru: "https://www.javguru.com/actress/yoshitaka-nene",
        dob: "1999-11-10",
        debut: "2018-03-25",
        measurements: "92-60-89",
        cup: "F",
        height: 165
    },
    { 
        name: "Asano Kokoro", 
        images: [
            "https://lh3.googleusercontent.com/d/13TKLdkbxAkuw6a05esoPjV7G3FxqS_n8"
        ],
        javguru: "https://www.javguru.com/actress/asano-kokoro",
        dob: "1997-04-05",
        debut: "2017-08-12",
        measurements: "86-57-84",
        cup: "D",
        height: 162
    },
    { 
        name: "Miyajima Mei", 
        images: [
            "https://lh3.googleusercontent.com/d/14sQWLO4bcmDn-AlimVujYE2BKgoJbs4g"
        ],
        javguru: "https://www.javguru.com/actress/miyajima-mei",
        dob: "1995-09-18",
        debut: "2015-11-01",
        measurements: "90-59-88",
        cup: "E",
        height: 168
    },
    { 
        name: "Sakakihara Moe", 
        images: [
            "https://lh3.googleusercontent.com/d/13l9JhLM-pHwk9FS_PDll00AtdmebwPOL"
        ],
        javguru: "https://www.javguru.com/actress/sakakihara-moe",
        dob: "2000-01-28",
        debut: "2019-04-10",
        measurements: "84-55-82",
        cup: "C",
        height: 155
    },
    { 
        name: "Shitara Yuuhi", 
        images: [
            "https://lh3.googleusercontent.com/d/13gQzdwUUMPDqsUjzSx9jaDoKaFw0_6-K"
        ],
        javguru: "https://www.javguru.com/actress/shitara-yuuhi",
        dob: "1998-08-14",
        debut: "2017-12-05",
        measurements: "87-57-85",
        cup: "D",
        height: 163
    },
    { 
        name: "Tachibana Mary", 
        images: [
            "https://lh3.googleusercontent.com/d/15_3vEPu0vITayCg3eJjOMXpUmpTcxpJI"
        ],
        javguru: "https://www.javguru.com/actress/tachibana-mary",
        dob: "1996-12-03",
        debut: "2016-02-14",
        measurements: "93-61-90",
        cup: "F",
        height: 170
    },
    { 
        name: "Kawakita Saika", 
        images: [
            "https://lh3.googleusercontent.com/d/13NLn5XnZV_KVRR7_EtUm6qbGn8Vqpp4w"
        ],
        javguru: "https://www.javguru.com/actress/kawakita-saika",
        dob: "1994-06-25",
        debut: "2014-09-01",
        measurements: "88-58-86",
        cup: "E",
        height: 159
    },
    { 
        name: "Kaede Karen", 
        images: [
            "https://lh3.googleusercontent.com/d/151tX4Xuuls3qzuZRgE7egZ5-Yc90o4oW"
        ],
        javguru: "https://www.javguru.com/actress/kaede-karen",
        dob: "1997-02-19",
        debut: "2016-06-20",
        measurements: "85-56-83",
        cup: "D",
        height: 161
    },
    { 
        name: "Kodama Nanami", 
        images: [
            "https://lh3.googleusercontent.com/d/154RQeEbyraafSZDD6QKieXY2xELdz5nV"
        ],
        javguru: "https://www.javguru.com/actress/kodama-nanami",
        dob: "1999-07-30",
        debut: "2018-10-15",
        measurements: "91-59-88",
        cup: "E",
        height: 166
    },
    { 
        name: "Nanatsumori Riri", 
        images: [
            "https://lh3.googleusercontent.com/d/13OkczwZyXT01U9-jzV4B6zFTm0AFuiOy"
        ],
        javguru: "https://www.javguru.com/actress/nanatsumori-riri",
        dob: "2001-03-12",
        debut: "2020-01-25",
        measurements: "83-54-81",
        cup: "C",
        height: 154
    },
    { 
        name: "Miyashita Rena", 
        images: [
            "https://lh3.googleusercontent.com/d/154t2XiQic1erJ3V9omTC4rjbHFEHfE5h"
        ],
        javguru: "https://www.javguru.com/actress/miyashita-rena",
        dob: "1995-10-08",
        debut: "2015-12-01",
        measurements: "89-58-87",
        cup: "E",
        height: 164
    },
    { 
        name: "Itsukaichi Mei", 
        images: [
            "https://lh3.googleusercontent.com/d/1590aJAgYvZTQXafRLFQM8nPjBhXjFV3j"
        ],
        javguru: "https://www.javguru.com/actress/itsukaichi-mei",
        dob: "1998-05-17",
        debut: "2017-09-20",
        measurements: "86-56-84",
        cup: "D",
        height: 158
    },
    { 
        name: "Honjou Suzu", 
        images: [
            "https://lh3.googleusercontent.com/d/15CNd9Xf_5WoEU79_h6XoA2R6EUZfnlcM"
        ],
        javguru: "https://www.javguru.com/actress/honjou-suzu",
        dob: "1996-11-02",
        debut: "2016-04-15",
        measurements: "92-60-89",
        cup: "F",
        height: 169
    },
    { 
        name: "Miho Nana", 
        images: [
            "https://lh3.googleusercontent.com/d/157Yh1rZ_okPhbUt7WkCTd6W3PAalWj8N"
        ],
        javguru: "https://www.javguru.com/actress/miho-nana",
        dob: "2000-04-08",
        debut: "2019-06-30",
        measurements: "84-55-82",
        cup: "C",
        height: 156
    },
    { 
        name: "Sakura Norino", 
        images: [
            "https://lh3.googleusercontent.com/d/15Hru0i5O0KFPlD6S6YZ8fdE96i3L4SvP"
        ],
        javguru: "https://www.javguru.com/actress/sakura-norino",
        dob: "1997-08-21",
        debut: "2016-11-10",
        measurements: "87-57-85",
        cup: "D",
        height: 162
    },
    { 
        name: "Hayasaka Hime", 
        images: [
            "https://lh3.googleusercontent.com/d/15QTFVxxBxBG340akHDdo4mxbTyi9zAFz"
        ],
        javguru: "https://www.javguru.com/actress/hayasaka-hime",
        dob: "1999-12-15",
        debut: "2018-07-05",
        measurements: "90-59-88",
        cup: "E",
        height: 167
    },
    { 
        name: "Nonoura Non", 
        images: [
            "https://lh3.googleusercontent.com/d/15WIHB_pa-GfBHKxT4wdERvZzRr-b_UOR"
        ],
        javguru: "https://www.javguru.com/actress/nonoura-non",
        dob: "1995-02-28",
        debut: "2014-08-15",
        measurements: "88-58-86",
        cup: "E",
        height: 160
    },
    { 
        name: "Arata Arina", 
        images: [
            "https://lh3.googleusercontent.com/d/15YTRCB6Rrgiv5uQMi6y9fY7YTPmOusJW"
        ],
        javguru: "https://www.javguru.com/actress/arata-arina",
        dob: "1998-09-09",
        debut: "2017-12-01",
        measurements: "85-56-83",
        cup: "D",
        height: 157
    },
    { 
        name: "Sakura Momo", 
        images: [
            "https://lh3.googleusercontent.com/d/160LlM224pxbY_7Kef3ptJmAmcTd29bqY"
        ],
        javguru: "https://www.javguru.com/actress/sakura-momo",
        dob: "2000-06-18",
        debut: "2019-08-25",
        measurements: "92-60-89",
        cup: "F",
        height: 168
    },
    { 
        name: "Minami Aizawa", 
        images: [
            "https://lh3.googleusercontent.com/d/164sA3dmx52D9K8QVOUbS13ex76XupaMI"
        ],
        javguru: "https://www.javguru.com/actress/minami-aizawa",
        dob: "1996-03-25",
        debut: "2015-10-01",
        measurements: "86-57-84",
        cup: "D",
        height: 163
    },
    { 
        name: "Nosaka Hiyori", 
        images: [
            "https://lh3.googleusercontent.com/d/16URYYdIkjrGK83XQFETUjI7jaxlGNnqI"
        ],
        javguru: "https://www.javguru.com/actress/nosaka-hiyori",
        dob: "1997-07-12",
        debut: "2017-03-15",
        measurements: "89-58-87",
        cup: "E",
        height: 165
    },
    { 
        name: "Tokita Ami", 
        images: [
            "https://lh3.googleusercontent.com/d/16iFaPaDm2uF7ncZvVMjuZikb4T8smWWH"
        ],
        javguru: "https://www.javguru.com/actress/tokita-ami",
        dob: "2001-01-05",
        debut: "2020-03-10",
        measurements: "84-55-82",
        cup: "C",
        height: 155
    },
    { 
        name: "Mori Ayami", 
        images: [
            "https://lh3.googleusercontent.com/d/17XfF4AxcIjxn54zC189Z4SrQFUhCIUmg"
        ],
        javguru: "https://www.javguru.com/actress/mori-ayami",
        dob: "1995-05-29",
        debut: "2015-07-20",
        measurements: "91-59-88",
        cup: "E",
        height: 166
    },
    { 
        name: "Mochizuki Tsubomi", 
        images: [
            "https://lh3.googleusercontent.com/d/16o77GrSsKd335_lEj-jM4v6olq_sPJi3"
        ],
        javguru: "https://www.javguru.com/actress/mochizuki-tsubomi",
        dob: "1998-10-03",
        debut: "2018-01-15",
        measurements: "87-57-85",
        cup: "D",
        height: 160
    },
    { 
        name: "Suzunoya Rin", 
        images: [
            "https://lh3.googleusercontent.com/d/16l3devfyiGiiW0Pt4ftBCBFLqNIhb7M3"
        ],
        javguru: "https://www.javguru.com/actress/suzunoya-rin",
        dob: "1996-06-15",
        debut: "2016-08-01",
        measurements: "88-58-86",
        cup: "E",
        height: 164
    },
    { 
        name: "Nijimura Yumi", 
        images: [
            "https://lh3.googleusercontent.com/d/1-SXJROKyfoBe1yQ_XjO3Glqlyb6N0Q-z"
        ],
        javguru: "https://www.javguru.com/actress/nijimura-yumi",
        dob: "1999-04-22",
        debut: "2018-09-05",
        measurements: "85-56-83",
        cup: "D",
        height: 157
    },
    { 
        name: "Ashitaba Mitsuha", 
        images: [
            "https://lh3.googleusercontent.com/d/1-Z_293LnV7YAwoITP_tggvF953gVAd9q"
        ],
        javguru: "https://www.javguru.com/actress/ashitaba-mitsuha",
        dob: "1997-09-11",
        debut: "2017-05-20",
        measurements: "90-59-88",
        cup: "E",
        height: 168
    },
    { 
        name: "Sasaki Saki", 
        images: [
            "https://lh3.googleusercontent.com/d/1-RnpmNAMzN-m-gjJboHsVKkvk-ihi52X"
        ],
        javguru: "https://www.javguru.com/actress/sasaki-saki",
        dob: "1995-12-08",
        debut: "2015-03-15",
        measurements: "92-60-89",
        cup: "F",
        height: 170
    },
    { 
        name: "Miru", 
        images: [
            "https://lh3.googleusercontent.com/d/108EojxVxUborKqo7HxGoz6wUgA1pPmlJ"
        ],
        javguru: "https://www.javguru.com/actress/miru",
        dob: "1998-02-14",
        debut: "2017-07-10",
        measurements: "86-57-84",
        cup: "D",
        height: 162
    },
    { 
        name: "Kudou Rara", 
        images: [
            "https://lh3.googleusercontent.com/d/10eqZpiePoI5_hjUsEZv-zTZDv8hXVydZ"
        ],
        javguru: "https://www.javguru.com/actress/kudou-rara",
        dob: "2000-08-06",
        debut: "2019-10-20",
        measurements: "84-55-82",
        cup: "C",
        height: 156
    },
    { 
        name: "Kurumi Sakura", 
        images: [
            "https://lh3.googleusercontent.com/d/10lGxBXeHBZVSL4zFDfenNswDdSiSSuyh"
        ],
        javguru: "https://www.javguru.com/actress/kurumi-sakura",
        dob: "1996-10-29",
        debut: "2016-12-01",
        measurements: "89-58-87",
        cup: "E",
        height: 165
    },
    { 
        name: "Nagisa Airi", 
        images: [
            "https://lh3.googleusercontent.com/d/10mOc4Gn5zJEJZ1mt2L44gehS8CHYW-P0"
        ],
        javguru: "https://www.javguru.com/actress/nagisa-airi",
        dob: "1994-04-17",
        debut: "2014-06-20",
        measurements: "88-58-86",
        cup: "E",
        height: 159
    },
    { 
        name: "Tsubasa Mai", 
        images: [
            "https://lh3.googleusercontent.com/d/10pfkl_-1PWK8_EiwQBRqaq-BaZCthvNu"
        ],
        javguru: "https://www.javguru.com/actress/tsubasa-mai",
        dob: "1997-03-03",
        debut: "2016-09-25",
        measurements: "85-56-83",
        cup: "D",
        height: 161
    },
    { 
        name: "Kaede Fuua", 
        images: [
            "https://lh3.googleusercontent.com/d/10yqQ9iuMS-ZdGLTPdwm_Tfa4hZJ7-Rfl"
        ],
        javguru: "https://www.javguru.com/actress/kaede-fuua",
        dob: "1999-06-19",
        debut: "2018-04-15",
        measurements: "91-59-88",
        cup: "E",
        height: 167
    },
    { 
        name: "Ayumi Ryou", 
        images: [
            "https://lh3.googleusercontent.com/d/11-IYV7MYcv7MDp1cPKDNVTbVWEwVhdcc"
        ],
        javguru: "https://www.javguru.com/actress/ayumi-ryou",
        dob: "1995-08-23",
        debut: "2015-10-10",
        measurements: "87-57-85",
        cup: "D",
        height: 163
    },
    { 
        name: "Yorimoto Shiori", 
        images: [
            "https://lh3.googleusercontent.com/d/115qSkdLb9UDGqy8-VoujfQ3wrM_Pe1D_"
        ],
        javguru: "https://www.javguru.com/actress/yorimoto-shiori",
        dob: "2000-11-11",
        debut: "2019-07-01",
        measurements: "83-54-81",
        cup: "C",
        height: 154
    },
    { 
        name: "Hinata Marin", 
        images: [
            "https://lh3.googleusercontent.com/d/11FQqEffRc3ZZiVAwnlnMB7GvdPVO98FT"
        ],
        javguru: "https://www.javguru.com/actress/hinata-marin",
        dob: "1998-07-07",
        debut: "2017-11-15",
        measurements: "90-59-88",
        cup: "E",
        height: 166
    },
    { 
        name: "Amane Mahina", 
        images: [
            "https://lh3.googleusercontent.com/d/11O2uOJWZkC3f-VQ9XMpUz6WLaOr8uuNW"
        ],
        javguru: "https://www.javguru.com/actress/amane-mahina",
        dob: "1996-01-13",
        debut: "2015-08-05",
        measurements: "86-57-84",
        cup: "D",
        height: 162
    },
    { 
        name: "Nanashima Mai", 
        images: [
            "https://lh3.googleusercontent.com/d/11rArnb4ZN2qnvoP5iquFi7o9uN7YJory"
        ],
        javguru: "https://www.javguru.com/actress/nanashima-mai",
        dob: "1997-05-26",
        debut: "2017-02-20",
        measurements: "89-58-87",
        cup: "E",
        height: 164
    },
    { 
        name: "Aoba Haru", 
        images: [
            "https://lh3.googleusercontent.com/d/11tJ_4Q51WvuXyi_5yq0zWkxNYc8-Ox-G"
        ],
        javguru: "https://www.javguru.com/actress/aoba-haru",
        dob: "2001-09-04",
        debut: "2020-05-15",
        measurements: "85-56-83",
        cup: "D",
        height: 158
    },
    { 
        name: "Mio Mao", 
        images: [
            "https://lh3.googleusercontent.com/d/11wbiKXkNT0JnuwXjodJiDIvNjpx2CiNc"
        ],
        javguru: "https://www.javguru.com/actress/mio-mao",
        dob: "1995-11-30",
        debut: "2015-04-10",
        measurements: "92-60-89",
        cup: "F",
        height: 169
    },
    { 
        name: "Nagisa Mitsuki", 
        images: [
            "https://lh3.googleusercontent.com/d/121rT1vVIUSIGpVTFIkdCLJGWkOW1JQWe"
        ],
        javguru: "https://www.javguru.com/actress/nagisa-mitsuki",
        dob: "1998-12-25",
        debut: "2018-06-01",
        measurements: "88-58-86",
        cup: "E",
        height: 160
    },
    { 
        name: "Shiromine Miu", 
        images: [
            "https://lh3.googleusercontent.com/d/124zq0am6yb5KczFRpUz-G6xDGc3eN3e4"
        ],
        javguru: "https://www.javguru.com/actress/shiromine-miu",
        dob: "1999-08-16",
        debut: "2018-11-20",
        measurements: "84-55-82",
        cup: "C",
        height: 156
    },
    { 
        name: "Momonogi Kana", 
        images: [
            "https://lh3.googleusercontent.com/d/12iehLsCmBjrbDzibTQwE_AuGFqwiHBEl"
        ],
        javguru: "https://www.javguru.com/actress/momonogi-kana",
        dob: "1997-10-07",
        debut: "2017-04-15",
        measurements: "87-57-85",
        cup: "D",
        height: 163
    },
    { 
        name: "Ichika Nenne", 
        images: [
            "https://lh3.googleusercontent.com/d/112e5i7r6OQrZANIkKN4LR54oXTvGOZZO"
        ],
        javguru: "https://www.javguru.com/actress/ichika-nenne",
        dob: "1996-04-18",
        debut: "2016-07-20",
        measurements: "90-59-88",
        cup: "E",
        height: 167
    },
    { 
        name: "Kosaka Nanaka", 
        images: [
            "https://lh3.googleusercontent.com/d/12phTVEuvBU1EXFbhSY4z99S_M0M4MQpd"
        ],
        javguru: "https://www.javguru.com/actress/kosaka-nanaka",
        dob: "2000-02-09",
        debut: "2019-09-25",
        measurements: "83-54-81",
        cup: "C",
        height: 154
    },
    { 
        name: "Irita Maaya", 
        images: [
            "https://lh3.googleusercontent.com/d/11VdSQy0KzHZ7R-NVg6zYtX89qMe6luf-"
        ],
        javguru: "https://www.javguru.com/actress/irita-maaya",
        dob: "1995-07-14",
        debut: "2015-09-01",
        measurements: "89-58-87",
        cup: "E",
        height: 165
    },
    { 
        name: "Azusa Hikari", 
        images: [
            "https://lh3.googleusercontent.com/d/17Q5wRlvT0VEHF2iAFWLTHmaWcCLXVoeQ"
        ],
        javguru: "https://www.javguru.com/actress/azusa-hikari",
        dob: "1998-01-20",
        debut: "2017-08-10",
        measurements: "86-57-84",
        cup: "D",
        height: 162
    },
    { 
        name: "Kuroshima Rei", 
        images: [
            "https://lh3.googleusercontent.com/d/111i0fkxtQP7Dr34I22LFQMB0ilGIZGiC"
        ],
        javguru: "https://www.javguru.com/actress/kuroshima-rei",
        dob: "1996-06-05",
        debut: "2016-10-15",
        measurements: "91-59-88",
        cup: "E",
        height: 166
    },
    { 
        name: "Akari Matsunaga", 
        images: [
            "https://lh3.googleusercontent.com/d/12qILO-84ZMyGVqOIo9O9yQ3lRmxNTCVs"
        ],
        javguru: "https://www.javguru.com/actress/akari-matsunaga",
        dob: "1999-03-27",
        debut: "2018-08-01",
        measurements: "85-56-83",
        cup: "D",
        height: 158
    },
    { 
        name: "Mito Kana", 
        images: [
            "https://lh3.googleusercontent.com/d/12vao9oAL-tRtN4J_MnnO-5JdsbEIrxGj"
        ],
        javguru: "https://www.javguru.com/actress/mito-kana",
        dob: "1997-09-15",
        debut: "2017-01-20",
        measurements: "88-58-86",
        cup: "E",
        height: 161
    },
    { 
        name: "Jinguji Nao", 
        images: [
            "https://lh3.googleusercontent.com/d/13WwYomyqb7gpuqO2rjuUm6fJxBCjLBdE"
        ],
        javguru: "https://www.javguru.com/actress/jinguji-nao",
        dob: "1995-03-01",
        debut: "2014-11-15",
        measurements: "92-60-89",
        cup: "F",
        height: 170
    },
    { 
        name: "Mikami Yua", 
        images: [
            "https://lh3.googleusercontent.com/d/163Ehim2T7JDp8BSuw4gY1vu8AfLhyAs2"
        ],
        javguru: "https://www.javguru.com/actress/mikami-yua",
        dob: "1993-08-16",
        debut: "2013-12-01",
        measurements: "90-59-88",
        cup: "E",
        height: 168
    },
    { 
        name: "Yuzuriha Karen", 
        images: [
            "https://lh3.googleusercontent.com/d/13aMNnpld-t2NaJqsPM0-admugKjlY-fc"
        ],
        javguru: "https://www.javguru.com/actress/yuzuriha-karen",
        dob: "1998-05-22",
        debut: "2017-10-05",
        measurements: "86-57-84",
        cup: "D",
        height: 162
    },
    { 
        name: "Hongou Ai", 
        images: [
            "https://lh3.googleusercontent.com/d/13nCLgHgEX8MivRYN0jEHfbMxDlCWH-0c"
        ],
        javguru: "https://www.javguru.com/actress/hongou-ai",
        dob: "1996-09-02",
        debut: "2016-05-15",
        measurements: "89-58-87",
        cup: "E",
        height: 165
    },
    { 
        name: "Suzumori Remu", 
        images: [
            "https://lh3.googleusercontent.com/d/13oGLTd9Hm9-sOZxFHxpEgXziH2MurX0j"
        ],
        javguru: "https://www.javguru.com/actress/suzumori-remu",
        dob: "1999-12-10",
        debut: "2018-12-20",
        measurements: "87-57-85",
        cup: "D",
        height: 163
    }
],
    tags: [
        { 
            name: "Outdoor", 
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "Scenic", 
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "HD", 
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80" 
        },
        { 
            name: "Nature", 
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "Adventure", 
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "Mountain", 
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "City", 
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80" 
        },
        { 
            name: "Night", 
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1194&q=80" 
        },
        { 
            name: "Urban", 
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80" 
        },
        { 
            name: "Tokyo", 
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1194&q=80" 
        },
        { 
            name: "Nightlife", 
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1194&q=80" 
        },
        { 
            name: "Lights", 
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1194&q=80" 
        },
        { 
            name: "Beach", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" 
        },
        { 
            name: "Sunset", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" 
        },
        { 
            name: "Summer", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" 
        },
        { 
            name: "Ocean", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" 
        }
    ],
    studios: [
        { 
            name: "Prestige", 
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80" 
        },
        { 
            name: "S1", 
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1194&q=80" 
        },
        { 
            name: "Moodyz", 
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "IDEA POCKET", 
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "Attackers", 
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80" 
        },
        { 
            name: "Madonna", 
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1194&q=80" 
        },
        { 
            name: "Faleno", 
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "KM Produce", 
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        }
    ],
    tokens: [
        { 
            name: "Tok-001", 
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80" 
        },
        { 
            name: "Tok-002", 
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1194&q=80" 
        },
        { 
            name: "Tok-003", 
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "Tok-004", 
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "Tok-005", 
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80" 
        }
    ],
    series: [
        { 
            name: "Mountain Adventures", 
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "City Nights", 
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80" 
        },
        { 
            name: "Beach Collection", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" 
        },
        { 
            name: "Seasonal Beauty", 
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        },
        { 
            name: "Urban Exploration", 
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1194&q=80" 
        }
    ]
};
