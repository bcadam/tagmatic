var d3 = require("d3");
var jsdom = require("jsdom");


var Parse = require('parse').Parse;
var React = require('react');
var ParseReact = require('parse-react');
var natural = require('natural');


//https://github.com/NaturalNode/natural
Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};





var DataView = React.createClass({
    render: function() {


        //var socket = io();
        var tweets = {
            "twitterResponse": [{
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:43 +0000 2015",
                "id": 659379521964109800,
                "id_str": "659379521964109824",
                "text": "RT @Joaquimllorens: \"El Govern porta als tribunals els problemes del vot exterior el 27-S\"  https://t.co/Ch0xKtttJL",
                "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2710760612,
                    "id_str": "2710760612",
                    "name": "ANC New York",
                    "screen_name": "ancnyc",
                    "location": "New York City",
                    "description": "The Catalan National Assembly in NY is a non-for-profit and non-partisan organization aiming to help the  independence movement from NY \nhttps://t.co/9bp6lPKGOb",
                    "url": "https://t.co/BvyyyHVQGO",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https://t.co/BvyyyHVQGO",
                                "expanded_url": "https://www.facebook.com/ANCatNY",
                                "display_url": "facebook.com/ANCatNY",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "https://t.co/9bp6lPKGOb",
                                "expanded_url": "https://goo.gl/photos/tm9R7mgbQSwYytPo7",
                                "display_url": "goo.gl/photos/tm9R7mg…",
                                "indices": [137, 160]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 1038,
                    "friends_count": 398,
                    "listed_count": 28,
                    "created_at": "Wed Aug 06 01:19:16 +0000 2014",
                    "favourites_count": 294,
                    "utc_offset": -14400,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 3894,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/518493359183118336/MhNJuokZ_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/518493359183118336/MhNJuokZ_normal.png",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2710760612/1441123500",
                    "profile_link_color": "757CF5",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "und",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:40:27 +0000 2015",
                    "id": 659379205566808000,
                    "id_str": "659379205566808064",
                    "text": "\"El Govern porta als tribunals els problemes del vot exterior el 27-S\"  https://t.co/Ch0xKtttJL",
                    "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 206991324,
                        "id_str": "206991324",
                        "name": "Quim Llorens ||\\*/||",
                        "screen_name": "Joaquimllorens",
                        "location": "Blanes, Selva, Països Catalans",
                        "description": "Membre del Secretariat Nacional de l'@assemblea, Comunicació, Xarxes Socials, WEB, Gestió Administrativa, AS Informàtics i Audiovisuals de l'ANC.",
                        "url": "http://t.co/ClTJVegpYr",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/ClTJVegpYr",
                                    "expanded_url": "http://assemblea.cat",
                                    "display_url": "assemblea.cat",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 2091,
                        "friends_count": 2242,
                        "listed_count": 40,
                        "created_at": "Sun Oct 24 07:26:05 +0000 2010",
                        "favourites_count": 3870,
                        "utc_offset": 3600,
                        "time_zone": "Warsaw",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 26684,
                        "lang": "ca",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "020B2E",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/737823140/d7f588dd22478c07ba38f5ce820be8d6.jpeg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/737823140/d7f588dd22478c07ba38f5ce820be8d6.jpeg",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/603542526956535808/9gocC5Xc_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/603542526956535808/9gocC5Xc_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/206991324/1425737266",
                        "profile_link_color": "1D8BE0",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "EDF0CE",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https://t.co/Ch0xKtttJL",
                            "expanded_url": "http://j.mp/1WiAXCv",
                            "display_url": "j.mp/1WiAXCv",
                            "indices": [72, 95]
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "und"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "Joaquimllorens",
                        "name": "Quim Llorens ||\\*/||",
                        "id": 206991324,
                        "id_str": "206991324",
                        "indices": [3, 18]
                    }],
                    "urls": [{
                        "url": "https://t.co/Ch0xKtttJL",
                        "expanded_url": "http://j.mp/1WiAXCv",
                        "display_url": "j.mp/1WiAXCv",
                        "indices": [92, 115]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:43 +0000 2015",
                "id": 659379521745883100,
                "id_str": "659379521745883136",
                "text": "37 Important Lessons The Internet Taught Us About Cats https://t.co/EsQoas6SND",
                "source": "<a href=\"http://www.facebook.com/twitter\" rel=\"nofollow\">Facebook</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 25954270,
                    "id_str": "25954270",
                    "name": "jennifer illustre",
                    "screen_name": "jenillustre",
                    "location": "Wiesbaden, Germany",
                    "description": "A familiar stranger: Loves #food, #travel, #singing, #cats, #dogs, #sarcasm, #witty humor, #social media and being #crazy just like you. Oh, I hate #hashtags.",
                    "url": "http://t.co/9T1FFU1VBT",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/9T1FFU1VBT",
                                "expanded_url": "http://www.locanto.info/safer_trading/blog/",
                                "display_url": "locanto.info/safer_trading/…",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 676,
                    "friends_count": 2003,
                    "listed_count": 22,
                    "created_at": "Mon Mar 23 04:40:25 +0000 2009",
                    "favourites_count": 230,
                    "utc_offset": 3600,
                    "time_zone": "Berlin",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 7090,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "EBEBEB",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme7/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme7/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/459698918918340608/QuR0bdSG_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/459698918918340608/QuR0bdSG_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/25954270/1360765644",
                    "profile_link_color": "990000",
                    "profile_sidebar_border_color": "DFDFDF",
                    "profile_sidebar_fill_color": "F3F3F3",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/EsQoas6SND",
                        "expanded_url": "http://fb.me/2oAaBcdNB",
                        "display_url": "fb.me/2oAaBcdNB",
                        "indices": [55, 78]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:43 +0000 2015",
                "id": 659379521221742600,
                "id_str": "659379521221742592",
                "text": ".FomentTreball recorda l'aposta pel pacte fiscal el dia que Rajoy treu pit del seu rebuig, crònica de peregendrau https://t.co/RriUSdGkJw",
                "source": "<a href=\"http://ifttt.com\" rel=\"nofollow\">IFTTT</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3436651324,
                    "id_str": "3436651324",
                    "name": "Dignitat Catalana",
                    "screen_name": "Dignitat1714",
                    "location": "Catalunya",
                    "description": "Catalans d'una terra envaïda i colonitzada ara lluitem per la llibertat de tot el nostre país #JuntsPelSi",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 22,
                    "friends_count": 0,
                    "listed_count": 7,
                    "created_at": "Sun Aug 23 11:23:20 +0000 2015",
                    "favourites_count": 0,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 9045,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/635423307878297600/FewyU_Nw_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/635423307878297600/FewyU_Nw_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3436651324/1440331431",
                    "profile_link_color": "DD2E44",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/RriUSdGkJw",
                        "expanded_url": "https://t.co/kRnih6fFJq",
                        "display_url": "t.co/kRnih6fFJq",
                        "indices": [114, 137]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:42 +0000 2015",
                "id": 659379519724343300,
                "id_str": "659379519724343296",
                "text": "Acaben els registres policials a Barcelona i Manresa relacionats amb el cas Pandora https://t.co/YnmCvPlkN7",
                "source": "<a href=\"http://ifttt.com\" rel=\"nofollow\">IFTTT</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3436651324,
                    "id_str": "3436651324",
                    "name": "Dignitat Catalana",
                    "screen_name": "Dignitat1714",
                    "location": "Catalunya",
                    "description": "Catalans d'una terra envaïda i colonitzada ara lluitem per la llibertat de tot el nostre país #JuntsPelSi",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 22,
                    "friends_count": 0,
                    "listed_count": 7,
                    "created_at": "Sun Aug 23 11:23:20 +0000 2015",
                    "favourites_count": 0,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 9045,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/635423307878297600/FewyU_Nw_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/635423307878297600/FewyU_Nw_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3436651324/1440331431",
                    "profile_link_color": "DD2E44",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/YnmCvPlkN7",
                        "expanded_url": "https://t.co/5HnkAwkoFZ",
                        "display_url": "t.co/5HnkAwkoFZ",
                        "indices": [84, 107]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "th",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:42 +0000 2015",
                "id": 659379518407229400,
                "id_str": "659379518407229440",
                "text": "RT @wineyard_13: 🍜 ร้านก๊วยเตี๋ยวต้มยำเลอระเริง อร่อยได้เยอะ ร้านน่านั่ง พิกัดหลังมอ ข้าง SNOW CAT CAFE' #รีวิวขอนแก่น #รีวิวมข https://t.c…",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 993200222,
                    "id_str": "993200222",
                    "name": "คิมอั๋ม",
                    "screen_name": "UnKermSt",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 143,
                    "friends_count": 51,
                    "listed_count": 0,
                    "created_at": "Thu Dec 06 14:40:07 +0000 2012",
                    "favourites_count": 65,
                    "utc_offset": 25200,
                    "time_zone": "Bangkok",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 1671,
                    "lang": "th",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "030806",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/743941455/a57249dc81608763dfb256c5fa8941c6.jpeg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/743941455/a57249dc81608763dfb256c5fa8941c6.jpeg",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/648196709042905088/w_gugCUX_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/648196709042905088/w_gugCUX_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/993200222/1443377112",
                    "profile_link_color": "13F0B9",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "th",
                        "result_type": "recent"
                    },
                    "created_at": "Thu Oct 22 13:00:10 +0000 2015",
                    "id": 657179638754512900,
                    "id_str": "657179638754512896",
                    "text": "🍜 ร้านก๊วยเตี๋ยวต้มยำเลอระเริง อร่อยได้เยอะ ร้านน่านั่ง พิกัดหลังมอ ข้าง SNOW CAT CAFE' #รีวิวขอนแก่น #รีวิวมข https://t.co/eFqxkRVTUW",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 826613119,
                        "id_str": "826613119",
                        "name": "♡",
                        "screen_name": "wineyard_13",
                        "location": "му αddιcт ≠ уσυr вυѕѕιnєѕѕ ☻",
                        "description": "⠀⠀⠀⠀⠀⠀⠀☻ чɢѕtαnd | ι☆ɢσт⑦ | wчf♡pcч ⠀⠀⠀⠀⠀⠀⠀▴ вιɢвαиɢ | в.ι | ʝв | муρυρρу ∞ ⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀ ❥кrιѕчєσl | mαrквαm | вʝιn",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 187,
                        "friends_count": 164,
                        "listed_count": 3,
                        "created_at": "Sun Sep 16 06:20:06 +0000 2012",
                        "favourites_count": 2087,
                        "utc_offset": 25200,
                        "time_zone": "Bangkok",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 40036,
                        "lang": "th",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "F8F8FF",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/605682193856208896/pd6UCbKM.png",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/605682193856208896/pd6UCbKM.png",
                        "profile_background_tile": true,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/658957437798473728/8OXUHK8T_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/658957437798473728/8OXUHK8T_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/826613119/1444236505",
                        "profile_link_color": "EE82EE",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "FA474A",
                        "profile_text_color": "F6CA35",
                        "profile_use_background_image": true,
                        "has_extended_profile": true,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 104,
                    "favorite_count": 13,
                    "entities": {
                        "hashtags": [{
                            "text": "รีวิวขอนแก่น",
                            "indices": [88, 101]
                        }, {
                            "text": "รีวิวมข",
                            "indices": [102, 110]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 657179537277452300,
                            "id_str": "657179537277452288",
                            "indices": [111, 134],
                            "media_url": "http://pbs.twimg.com/media/CR7FTqkUAAAFyt-.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CR7FTqkUAAAFyt-.jpg",
                            "url": "https://t.co/eFqxkRVTUW",
                            "display_url": "pic.twitter.com/eFqxkRVTUW",
                            "expanded_url": "http://twitter.com/wineyard_13/status/657179638754512896/photo/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 340,
                                    "h": 255,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "w": 600,
                                    "h": 450,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 1024,
                                    "h": 768,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "th"
                },
                "is_quote_status": false,
                "retweet_count": 104,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "รีวิวขอนแก่น",
                        "indices": [105, 118]
                    }, {
                        "text": "รีวิวมข",
                        "indices": [119, 127]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "wineyard_13",
                        "name": "♡",
                        "id": 826613119,
                        "id_str": "826613119",
                        "indices": [3, 15]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 657179537277452300,
                        "id_str": "657179537277452288",
                        "indices": [139, 140],
                        "media_url": "http://pbs.twimg.com/media/CR7FTqkUAAAFyt-.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CR7FTqkUAAAFyt-.jpg",
                        "url": "https://t.co/eFqxkRVTUW",
                        "display_url": "pic.twitter.com/eFqxkRVTUW",
                        "expanded_url": "http://twitter.com/wineyard_13/status/657179638754512896/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 255,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 600,
                                "h": 450,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 1024,
                                "h": 768,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 657179638754512900,
                        "source_status_id_str": "657179638754512896",
                        "source_user_id": 826613119,
                        "source_user_id_str": "826613119"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "th"
            }, {
                "metadata": {
                    "iso_language_code": "es",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:42 +0000 2015",
                "id": 659379518084415500,
                "id_str": "659379518084415489",
                "text": "RT @carlesenric: ¿Que hace Barcelona pagando proyectos en países Sudamerica? En eso gastamos cientos miles euros? Lean proyectos https://t.…",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 293123345,
                    "id_str": "293123345",
                    "name": "ansa",
                    "screen_name": "ansachelo",
                    "location": "Madrid España",
                    "description": "¡Inteligencia, dame\n el nombre exacto, y tuyo,\n y suyo, y mío, de las cosas!  Juan Ramón Jiménez",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1030,
                    "friends_count": 1012,
                    "listed_count": 21,
                    "created_at": "Wed May 04 20:05:04 +0000 2011",
                    "favourites_count": 16270,
                    "utc_offset": 7200,
                    "time_zone": "Athens",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 68151,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/3554029554/e1b006fab963a7216aed362a5bee788e_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/3554029554/e1b006fab963a7216aed362a5bee788e_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/293123345/1444722969",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "es",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 13:10:30 +0000 2015",
                    "id": 659356568257974300,
                    "id_str": "659356568257974272",
                    "text": "¿Que hace Barcelona pagando proyectos en países Sudamerica? En eso gastamos cientos miles euros? Lean proyectos https://t.co/TLSYyhD9c2",
                    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 17308245,
                        "id_str": "17308245",
                        "name": "Carles Enric ",
                        "screen_name": "carlesenric",
                        "location": "Barcelona - Dubai",
                        "description": "Premio Internacionalización Economia Catalana-2001. Desde 1991 mundo editorial. CEO Netmaps. Más 500 columnas opinión Economía y Política. ¡Disfruto cada día!",
                        "url": "http://t.co/Msw1127b9G",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/Msw1127b9G",
                                    "expanded_url": "http://www.carlesenriclopez.com",
                                    "display_url": "carlesenriclopez.com",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 2053,
                        "friends_count": 828,
                        "listed_count": 102,
                        "created_at": "Tue Nov 11 11:47:43 +0000 2008",
                        "favourites_count": 36,
                        "utc_offset": 3600,
                        "time_zone": "Madrid",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 53513,
                        "lang": "es",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "4A913C",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/614446614950879232/PDOhpYDc.jpg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/614446614950879232/PDOhpYDc.jpg",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/2095750536/carles1_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/2095750536/carles1_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/17308245/1435881032",
                        "profile_link_color": "3B94D9",
                        "profile_sidebar_border_color": "000000",
                        "profile_sidebar_fill_color": "000000",
                        "profile_text_color": "000000",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 3,
                    "favorite_count": 1,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https://t.co/TLSYyhD9c2",
                            "expanded_url": "https://bop.diba.cat/scripts/ftpisa.asp?fnew?bop2015&10/022015023755.pdf&1",
                            "display_url": "bop.diba.cat/scripts/ftpisa…",
                            "indices": [112, 135]
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "es"
                },
                "is_quote_status": false,
                "retweet_count": 3,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "carlesenric",
                        "name": "Carles Enric ",
                        "id": 17308245,
                        "id_str": "17308245",
                        "indices": [3, 15]
                    }],
                    "urls": [{
                        "url": "https://t.co/TLSYyhD9c2",
                        "expanded_url": "https://bop.diba.cat/scripts/ftpisa.asp?fnew?bop2015&10/022015023755.pdf&1",
                        "display_url": "bop.diba.cat/scripts/ftpisa…",
                        "indices": [139, 140]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "es"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:42 +0000 2015",
                "id": 659379517836890100,
                "id_str": "659379517836890112",
                "text": "RT @Cheshirebizuk: Look no further for Business Services in #Cheshire\nhttps://t.co/08DvUK0DgR #Bizhour https://t.co/XUeY7y0x3f",
                "source": "<a href=\"https://roundteam.co\" rel=\"nofollow\">RoundTeam</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 1018390728,
                    "id_str": "1018390728",
                    "name": "allforevent",
                    "screen_name": "allforevent",
                    "location": "",
                    "description": "tweeting for the #event industry #weddings #shows #fayres #promotions #corporate getting out to 1000's of followers through our social network",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1211,
                    "friends_count": 1319,
                    "listed_count": 100,
                    "created_at": "Mon Dec 17 21:49:06 +0000 2012",
                    "favourites_count": 54,
                    "utc_offset": 0,
                    "time_zone": "Casablanca",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 24031,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/2988456201/541b424d779b4388ae3a781baef65012_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/2988456201/541b424d779b4388ae3a781baef65012_normal.jpeg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:25:32 +0000 2015",
                    "id": 659375451681521700,
                    "id_str": "659375451681521665",
                    "text": "Look no further for Business Services in #Cheshire\nhttps://t.co/08DvUK0DgR #Bizhour https://t.co/XUeY7y0x3f",
                    "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 1192728762,
                        "id_str": "1192728762",
                        "name": "Amanda",
                        "screen_name": "Cheshirebizuk",
                        "location": "",
                        "description": "Free to affordable #advertising & #promotion for #Cheshire small business & #socialmedia management for UK biz.\n#followthecat #shoplocal http://t.co/j8hxW1BgPS",
                        "url": "http://t.co/j8hxW2s4e4",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/j8hxW2s4e4",
                                    "expanded_url": "http://www.cheshireladders.co.uk",
                                    "display_url": "cheshireladders.co.uk",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": [{
                                    "url": "http://t.co/j8hxW1BgPS",
                                    "expanded_url": "http://www.cheshireladders.co.uk",
                                    "display_url": "cheshireladders.co.uk",
                                    "indices": [137, 159]
                                }]
                            }
                        },
                        "protected": false,
                        "followers_count": 7131,
                        "friends_count": 4248,
                        "listed_count": 202,
                        "created_at": "Mon Feb 18 10:34:39 +0000 2013",
                        "favourites_count": 4300,
                        "utc_offset": 0,
                        "time_zone": "London",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 51488,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/453496676573917186/UvTtrOSE_normal.jpeg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/453496676573917186/UvTtrOSE_normal.jpeg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1192728762/1421958308",
                        "profile_link_color": "8300B3",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [{
                            "text": "Cheshire",
                            "indices": [41, 50]
                        }, {
                            "text": "Bizhour",
                            "indices": [75, 83]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https://t.co/08DvUK0DgR",
                            "expanded_url": "http://bit.ly/1DP45gt",
                            "display_url": "bit.ly/1DP45gt",
                            "indices": [51, 74]
                        }],
                        "media": [{
                            "id": 659375451291299800,
                            "id_str": "659375451291299841",
                            "indices": [84, 107],
                            "media_url": "http://pbs.twimg.com/media/CSaServUsAERqav.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSaServUsAERqav.jpg",
                            "url": "https://t.co/XUeY7y0x3f",
                            "display_url": "pic.twitter.com/XUeY7y0x3f",
                            "expanded_url": "http://twitter.com/Cheshirebizuk/status/659375451681521665/photo/1",
                            "type": "photo",
                            "sizes": {
                                "medium": {
                                    "w": 490,
                                    "h": 506,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 490,
                                    "h": 506,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "small": {
                                    "w": 340,
                                    "h": 351,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "Cheshire",
                        "indices": [60, 69]
                    }, {
                        "text": "Bizhour",
                        "indices": [94, 102]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "Cheshirebizuk",
                        "name": "Amanda",
                        "id": 1192728762,
                        "id_str": "1192728762",
                        "indices": [3, 17]
                    }],
                    "urls": [{
                        "url": "https://t.co/08DvUK0DgR",
                        "expanded_url": "http://bit.ly/1DP45gt",
                        "display_url": "bit.ly/1DP45gt",
                        "indices": [70, 93]
                    }],
                    "media": [{
                        "id": 659375451291299800,
                        "id_str": "659375451291299841",
                        "indices": [103, 126],
                        "media_url": "http://pbs.twimg.com/media/CSaServUsAERqav.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaServUsAERqav.jpg",
                        "url": "https://t.co/XUeY7y0x3f",
                        "display_url": "pic.twitter.com/XUeY7y0x3f",
                        "expanded_url": "http://twitter.com/Cheshirebizuk/status/659375451681521665/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 490,
                                "h": 506,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 490,
                                "h": 506,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 340,
                                "h": 351,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659375451681521700,
                        "source_status_id_str": "659375451681521665",
                        "source_user_id": 1192728762,
                        "source_user_id_str": "1192728762"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "tl",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:41 +0000 2015",
                "id": 659379515865493500,
                "id_str": "659379515865493504",
                "text": "@NclGrcr Sure 😁 kamusta CAT?",
                "source": "<a href=\"https://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android Tablets</a>",
                "truncated": false,
                "in_reply_to_status_id": 659379260512075800,
                "in_reply_to_status_id_str": "659379260512075776",
                "in_reply_to_user_id": 2881495598,
                "in_reply_to_user_id_str": "2881495598",
                "in_reply_to_screen_name": "NclGrcr",
                "user": {
                    "id": 945590534,
                    "id_str": "945590534",
                    "name": "Sheena ♥",
                    "screen_name": "Sheena_Otaku",
                    "location": "PH",
                    "description": "Car Enthusiast || I am basically a girl with the personality of a DUDE  ||     iTams     ||    Ig: @sheenadiga        ||   Teejay Marquez ❤",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 531,
                    "friends_count": 600,
                    "listed_count": 0,
                    "created_at": "Tue Nov 13 11:08:54 +0000 2012",
                    "favourites_count": 2741,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 3608,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "DBE9ED",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/577024448043171840/T8QxSuUT.jpeg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/577024448043171840/T8QxSuUT.jpeg",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/623843557556654080/CO2kqbOt_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/623843557556654080/CO2kqbOt_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/945590534/1441277430",
                    "profile_link_color": "CC3366",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "NclGrcr",
                        "name": "Nicss",
                        "id": 2881495598,
                        "id_str": "2881495598",
                        "indices": [0, 8]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "tl"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:41 +0000 2015",
                "id": 659379513017634800,
                "id_str": "659379513017634817",
                "text": "RT @absoluteskating: #WednesdayWisdom Source: https://t.co/c0EZGMaaDY https://t.co/QIEoGpMAa7",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 72801093,
                    "id_str": "72801093",
                    "name": "Lambiel's Forum",
                    "screen_name": "lambielnews",
                    "location": "",
                    "description": "News from Stéphane Lambiel's Fan Forum. NOTE: This is not his private twitter.",
                    "url": "http://t.co/chf20pvOMP",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/chf20pvOMP",
                                "expanded_url": "http://absoluteskating.proboards.com/board/8",
                                "display_url": "absoluteskating.proboards.com/board/8",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 3151,
                    "friends_count": 4,
                    "listed_count": 435,
                    "created_at": "Wed Sep 09 08:24:13 +0000 2009",
                    "favourites_count": 3,
                    "utc_offset": 3600,
                    "time_zone": "Paris",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 5496,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "131516",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/516186383585533952/GOFiHTyd_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/516186383585533952/GOFiHTyd_normal.jpeg",
                    "profile_link_color": "DA430E",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "F3F3F3",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:39:54 +0000 2015",
                    "id": 659379063560282100,
                    "id_str": "659379063560282112",
                    "text": "#WednesdayWisdom Source: https://t.co/c0EZGMaaDY https://t.co/QIEoGpMAa7",
                    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 44091625,
                        "id_str": "44091625",
                        "name": "AbsoluteSkating",
                        "screen_name": "absoluteskating",
                        "location": "",
                        "description": "Figure Skating Portal",
                        "url": "http://t.co/0L0784H6EX",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/0L0784H6EX",
                                    "expanded_url": "http://www.absoluteskating.com",
                                    "display_url": "absoluteskating.com",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 4106,
                        "friends_count": 4,
                        "listed_count": 274,
                        "created_at": "Tue Jun 02 09:40:42 +0000 2009",
                        "favourites_count": 15,
                        "utc_offset": -28800,
                        "time_zone": "Alaska",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 4349,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "990100",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/16175908/as-mb-logo.jpg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/16175908/as-mb-logo.jpg",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/246336122/aslogo_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/246336122/aslogo_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/44091625/1377035410",
                        "profile_link_color": "990100",
                        "profile_sidebar_border_color": "9A9A9A",
                        "profile_sidebar_fill_color": "C5C5C5",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 4,
                    "favorite_count": 3,
                    "entities": {
                        "hashtags": [{
                            "text": "WednesdayWisdom",
                            "indices": [0, 16]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https://t.co/c0EZGMaaDY",
                            "expanded_url": "http://absoluteskating.com/interviews/2015stephanelambiel.html",
                            "display_url": "absoluteskating.com/interviews/201…",
                            "indices": [25, 48]
                        }],
                        "media": [{
                            "id": 659379062473928700,
                            "id_str": "659379062473928704",
                            "indices": [49, 72],
                            "media_url": "http://pbs.twimg.com/media/CSaVw4cWsAAnRiQ.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSaVw4cWsAAnRiQ.jpg",
                            "url": "https://t.co/QIEoGpMAa7",
                            "display_url": "pic.twitter.com/QIEoGpMAa7",
                            "expanded_url": "http://twitter.com/absoluteskating/status/659379063560282112/photo/1",
                            "type": "photo",
                            "sizes": {
                                "medium": {
                                    "w": 600,
                                    "h": 900,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 600,
                                    "h": 900,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "small": {
                                    "w": 340,
                                    "h": 510,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 4,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "WednesdayWisdom",
                        "indices": [21, 37]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "absoluteskating",
                        "name": "AbsoluteSkating",
                        "id": 44091625,
                        "id_str": "44091625",
                        "indices": [3, 19]
                    }],
                    "urls": [{
                        "url": "https://t.co/c0EZGMaaDY",
                        "expanded_url": "http://absoluteskating.com/interviews/2015stephanelambiel.html",
                        "display_url": "absoluteskating.com/interviews/201…",
                        "indices": [46, 69]
                    }],
                    "media": [{
                        "id": 659379062473928700,
                        "id_str": "659379062473928704",
                        "indices": [70, 93],
                        "media_url": "http://pbs.twimg.com/media/CSaVw4cWsAAnRiQ.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaVw4cWsAAnRiQ.jpg",
                        "url": "https://t.co/QIEoGpMAa7",
                        "display_url": "pic.twitter.com/QIEoGpMAa7",
                        "expanded_url": "http://twitter.com/absoluteskating/status/659379063560282112/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 600,
                                "h": 900,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 600,
                                "h": 900,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 340,
                                "h": 510,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659379063560282100,
                        "source_status_id_str": "659379063560282112",
                        "source_user_id": 44091625,
                        "source_user_id_str": "44091625"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:41 +0000 2015",
                "id": 659379512719900700,
                "id_str": "659379512719900672",
                "text": "RT @SalaStroika: DS 14 NOV // Casa de la Música presenta: LA TERRASSETA DE PREIXENS +ANTÍDOT. https://t.co/CQyI3VRJ8k https://t.co/1bleLRpo…",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 30690814,
                    "id_str": "30690814",
                    "name": "Plural Produccions",
                    "screen_name": "pluralprod",
                    "location": "Berga - Catalunya",
                    "description": "Som una empresa de management de grups de música. Des de l'any 1998 organitzem concerts i ens encarreguem de les produccions musicals.",
                    "url": "http://t.co/WSivIxUtdr",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/WSivIxUtdr",
                                "expanded_url": "http://www.pluralproduccions.com",
                                "display_url": "pluralproduccions.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1625,
                    "friends_count": 1220,
                    "listed_count": 42,
                    "created_at": "Sun Apr 12 18:05:00 +0000 2009",
                    "favourites_count": 6,
                    "utc_offset": 3600,
                    "time_zone": "Paris",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 1974,
                    "lang": "ca",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "A26E61",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/8308395/fons-twitter.jpg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/8308395/fons-twitter.jpg",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/134806040/twitter-requadre_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/134806040/twitter-requadre_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "A26E61",
                    "profile_sidebar_fill_color": "DAC5C0",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "und",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 13:50:34 +0000 2015",
                    "id": 659366649645109200,
                    "id_str": "659366649645109248",
                    "text": "DS 14 NOV // Casa de la Música presenta: LA TERRASSETA DE PREIXENS +ANTÍDOT. https://t.co/CQyI3VRJ8k https://t.co/1bleLRpo5h",
                    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 192917403,
                        "id_str": "192917403",
                        "name": "Stroika",
                        "screen_name": "SalaStroika",
                        "location": "MANRESA",
                        "description": "La sala Stroika és la seu de la Casa de la Música a Manresa. Sala de concerts i sessions cada divendres i dissabte fins les 6h",
                        "url": "http://t.co/aCuuFr1oKq",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/aCuuFr1oKq",
                                    "expanded_url": "http://www.stroika.cat",
                                    "display_url": "stroika.cat",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 5605,
                        "friends_count": 361,
                        "listed_count": 94,
                        "created_at": "Mon Sep 20 14:20:32 +0000 2010",
                        "favourites_count": 308,
                        "utc_offset": -25200,
                        "time_zone": "Pacific Time (US & Canada)",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 4030,
                        "lang": "es",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "131516",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/531851238078287873/Xtxk0-1E.jpeg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/531851238078287873/Xtxk0-1E.jpeg",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/460713767395807232/6ZAa8lJf_normal.jpeg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/460713767395807232/6ZAa8lJf_normal.jpeg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/192917403/1398685458",
                        "profile_link_color": "009999",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "EFEFEF",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": {
                        "id": "c396c282250e2106",
                        "url": "https://api.twitter.com/1.1/geo/id/c396c282250e2106.json",
                        "place_type": "city",
                        "name": "Manresa",
                        "full_name": "Manresa, Catalunya",
                        "country_code": "ES",
                        "country": "España",
                        "contained_within": [],
                        "bounding_box": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [1.7695235, 41.6881293],
                                    [1.8750019, 41.6881293],
                                    [1.8750019, 41.7583308],
                                    [1.7695235, 41.7583308]
                                ]
                            ]
                        },
                        "attributes": {}
                    },
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https://t.co/CQyI3VRJ8k",
                            "expanded_url": "http://ves.cat/mgip",
                            "display_url": "ves.cat/mgip",
                            "indices": [77, 100]
                        }],
                        "media": [{
                            "id": 659366648231673900,
                            "id_str": "659366648231673857",
                            "indices": [101, 124],
                            "media_url": "http://pbs.twimg.com/media/CSaKeRyWwAErVZG.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSaKeRyWwAErVZG.jpg",
                            "url": "https://t.co/1bleLRpo5h",
                            "display_url": "pic.twitter.com/1bleLRpo5h",
                            "expanded_url": "http://twitter.com/SalaStroika/status/659366649645109248/photo/1",
                            "type": "photo",
                            "sizes": {
                                "large": {
                                    "w": 1024,
                                    "h": 512,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 600,
                                    "h": 300,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 340,
                                    "h": 170,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "und"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "SalaStroika",
                        "name": "Stroika",
                        "id": 192917403,
                        "id_str": "192917403",
                        "indices": [3, 15]
                    }],
                    "urls": [{
                        "url": "https://t.co/CQyI3VRJ8k",
                        "expanded_url": "http://ves.cat/mgip",
                        "display_url": "ves.cat/mgip",
                        "indices": [94, 117]
                    }],
                    "media": [{
                        "id": 659366648231673900,
                        "id_str": "659366648231673857",
                        "indices": [118, 140],
                        "media_url": "http://pbs.twimg.com/media/CSaKeRyWwAErVZG.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaKeRyWwAErVZG.jpg",
                        "url": "https://t.co/1bleLRpo5h",
                        "display_url": "pic.twitter.com/1bleLRpo5h",
                        "expanded_url": "http://twitter.com/SalaStroika/status/659366649645109248/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 1024,
                                "h": 512,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 600,
                                "h": 300,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 340,
                                "h": 170,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659366649645109200,
                        "source_status_id_str": "659366649645109248",
                        "source_user_id": 192917403,
                        "source_user_id_str": "192917403"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:41 +0000 2015",
                "id": 659379512463851500,
                "id_str": "659379512463851521",
                "text": "@seiei_pad_cat 確かにアジルスは今回だけな感じしますね！青いのは事前告知なしだしなんかあまり特別感も感じなかったからその予想もありそうですね！！",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": 659377859702554600,
                "in_reply_to_status_id_str": "659377859702554624",
                "in_reply_to_user_id": 2854328384,
                "in_reply_to_user_id_str": "2854328384",
                "in_reply_to_screen_name": "seiei_pad_cat",
                "user": {
                    "id": 589186890,
                    "id_str": "589186890",
                    "name": "タケちゃん@白猫勢",
                    "screen_name": "0214_freedom",
                    "location": "",
                    "description": "本垢だけどリプ専。たまにゲームのことつぶやいてます！最近もっぱら白猫。あとモンスト・パズドラ・ツムツムをボチボチやってます！",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 142,
                    "friends_count": 135,
                    "listed_count": 1,
                    "created_at": "Thu May 24 13:05:18 +0000 2012",
                    "favourites_count": 262,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 2370,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/626755193925865472/2mnEa92q_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/626755193925865472/2mnEa92q_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/589186890/1417068992",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "seiei_pad_cat",
                        "name": "聖∞@気になります",
                        "id": 2854328384,
                        "id_str": "2854328384",
                        "indices": [0, 14]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:40 +0000 2015",
                "id": 659379511260123100,
                "id_str": "659379511260123136",
                "text": "@henachoco_yo なるほどです(^o^)顔色の悪さに気を取られてました〜笑\nハゲながら死ぬは想像できて笑いました！",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": 659374959161049100,
                "in_reply_to_status_id_str": "659374959161049088",
                "in_reply_to_user_id": 3257115866,
                "in_reply_to_user_id_str": "3257115866",
                "in_reply_to_screen_name": "henachoco_yo",
                "user": {
                    "id": 437402258,
                    "id_str": "437402258",
                    "name": "ま　のと　こ",
                    "screen_name": "juicy__cat",
                    "location": "北海道 釧路市にいました",
                    "description": "のんべんだらり 中の人と外の人のテンションが違います メボスと呼ばれたりします 猫に人気があります of Montreal/XTC/steve miller band大好き！",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 112,
                    "friends_count": 150,
                    "listed_count": 1,
                    "created_at": "Thu Dec 15 10:54:55 +0000 2011",
                    "favourites_count": 3329,
                    "utc_offset": 32400,
                    "time_zone": "Tokyo",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 4965,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "ACDED6",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme18/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme18/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/378800000456451014/14b3f9dafde6d5205dcd27bc65e40586_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000456451014/14b3f9dafde6d5205dcd27bc65e40586_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/437402258/1364996398",
                    "profile_link_color": "038543",
                    "profile_sidebar_border_color": "EEEEEE",
                    "profile_sidebar_fill_color": "F6F6F6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "henachoco_yo",
                        "name": "へなちょこ",
                        "id": 3257115866,
                        "id_str": "3257115866",
                        "indices": [0, 13]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:40 +0000 2015",
                "id": 659379510496772100,
                "id_str": "659379510496772096",
                "text": "@chihaya_cat @mikasaume うん、ひろさんだねd=(^o^)=b",
                "source": "<a href=\"http://twicca.r246.jp/\" rel=\"nofollow\">twicca</a>",
                "truncated": false,
                "in_reply_to_status_id": 659375201130410000,
                "in_reply_to_status_id_str": "659375201130409984",
                "in_reply_to_user_id": 183696682,
                "in_reply_to_user_id_str": "183696682",
                "in_reply_to_screen_name": "chihaya_cat",
                "user": {
                    "id": 519611637,
                    "id_str": "519611637",
                    "name": "うに",
                    "screen_name": "v_o3o",
                    "location": "",
                    "description": "( ･ω･).｡oO（…？）",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 51,
                    "friends_count": 254,
                    "listed_count": 0,
                    "created_at": "Fri Mar 09 16:19:33 +0000 2012",
                    "favourites_count": 654,
                    "utc_offset": -36000,
                    "time_zone": "Hawaii",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 10643,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/550315056546594818/pm-MCzFS_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/550315056546594818/pm-MCzFS_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/519611637/1378968830",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "chihaya_cat",
                        "name": "稚羽矢",
                        "id": 183696682,
                        "id_str": "183696682",
                        "indices": [0, 12]
                    }, {
                        "screen_name": "mikasaume",
                        "name": "カナ",
                        "id": 114738116,
                        "id_str": "114738116",
                        "indices": [13, 23]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:40 +0000 2015",
                "id": 659379510362665000,
                "id_str": "659379510362664960",
                "text": "RT @3coolkatz: @SocksMcFurry @RudigerTheCat @robinrescues @TheRealOtisFuzz @smiglilley @DaRealBunnyrats @Irritating_Cat @RhondaHendee 💙 da …",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2614767979,
                    "id_str": "2614767979",
                    "name": "Socks McFurry",
                    "screen_name": "SocksMcFurry",
                    "location": "Fantasyland & Somewhere, FL",
                    "description": "The Official Page of Socks McFurry. I was a shelter cat rescued by my mom, an aspiring writer! #CatsOfTwitter #amwriting",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 2942,
                    "friends_count": 2810,
                    "listed_count": 22,
                    "created_at": "Thu Jul 10 04:04:31 +0000 2014",
                    "favourites_count": 12503,
                    "utc_offset": -14400,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 6963,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "642D8B",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme10/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme10/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/603372931108896768/kNesy7yf_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/603372931108896768/kNesy7yf_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2614767979/1432517343",
                    "profile_link_color": "9266CC",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 13:52:07 +0000 2015",
                    "id": 659367040189378600,
                    "id_str": "659367040189378560",
                    "text": "@SocksMcFurry @RudigerTheCat @robinrescues @TheRealOtisFuzz @smiglilley @DaRealBunnyrats @Irritating_Cat @RhondaHendee 💙 da vampire kitty's!",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": 659307343272874000,
                    "in_reply_to_status_id_str": "659307343272873984",
                    "in_reply_to_user_id": 2614767979,
                    "in_reply_to_user_id_str": "2614767979",
                    "in_reply_to_screen_name": "SocksMcFurry",
                    "user": {
                        "id": 2660065111,
                        "id_str": "2660065111",
                        "name": "Rascal/Kobe/Cecil",
                        "screen_name": "3coolkatz",
                        "location": "",
                        "description": "We are 3 brofurs an the coolest catz you wll ever meet! Our new brofur is Cecil! We ❤️all anipals! Members of #BBOT#Weetis#ZSHQ#wlf ❤️#Raidernation",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 2910,
                        "friends_count": 1845,
                        "listed_count": 74,
                        "created_at": "Sat Jul 19 17:41:45 +0000 2014",
                        "favourites_count": 129542,
                        "utc_offset": null,
                        "time_zone": null,
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 70477,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/659379336512983040/OjMMYJlo_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/659379336512983040/OjMMYJlo_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2660065111/1444537451",
                        "profile_link_color": "0F00B3",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 3,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "SocksMcFurry",
                            "name": "Socks McFurry",
                            "id": 2614767979,
                            "id_str": "2614767979",
                            "indices": [0, 13]
                        }, {
                            "screen_name": "RudigerTheCat",
                            "name": "Rud the Storyteller",
                            "id": 2953538331,
                            "id_str": "2953538331",
                            "indices": [14, 28]
                        }, {
                            "screen_name": "robinrescues",
                            "name": "Robin #TeamTiggy",
                            "id": 3111978539,
                            "id_str": "3111978539",
                            "indices": [29, 42]
                        }, {
                            "screen_name": "TheRealOtisFuzz",
                            "name": "Otis Fuzz",
                            "id": 2774165418,
                            "id_str": "2774165418",
                            "indices": [43, 59]
                        }, {
                            "screen_name": "smiglilley",
                            "name": "Smig & Sorrel",
                            "id": 56490332,
                            "id_str": "56490332",
                            "indices": [60, 71]
                        }, {
                            "screen_name": "DaRealBunnyrats",
                            "name": "The Bunnyrats",
                            "id": 3143034258,
                            "id_str": "3143034258",
                            "indices": [72, 88]
                        }, {
                            "screen_name": "Irritating_Cat",
                            "name": "frank the tank",
                            "id": 807833372,
                            "id_str": "807833372",
                            "indices": [89, 104]
                        }, {
                            "screen_name": "RhondaHendee",
                            "name": "Batman & Rhonda",
                            "id": 2363042296,
                            "id_str": "2363042296",
                            "indices": [105, 118]
                        }],
                        "urls": []
                    },
                    "favorited": false,
                    "retweeted": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "3coolkatz",
                        "name": "Rascal/Kobe/Cecil",
                        "id": 2660065111,
                        "id_str": "2660065111",
                        "indices": [3, 13]
                    }, {
                        "screen_name": "SocksMcFurry",
                        "name": "Socks McFurry",
                        "id": 2614767979,
                        "id_str": "2614767979",
                        "indices": [15, 28]
                    }, {
                        "screen_name": "RudigerTheCat",
                        "name": "Rud the Storyteller",
                        "id": 2953538331,
                        "id_str": "2953538331",
                        "indices": [29, 43]
                    }, {
                        "screen_name": "robinrescues",
                        "name": "Robin #TeamTiggy",
                        "id": 3111978539,
                        "id_str": "3111978539",
                        "indices": [44, 57]
                    }, {
                        "screen_name": "TheRealOtisFuzz",
                        "name": "Otis Fuzz",
                        "id": 2774165418,
                        "id_str": "2774165418",
                        "indices": [58, 74]
                    }, {
                        "screen_name": "smiglilley",
                        "name": "Smig & Sorrel",
                        "id": 56490332,
                        "id_str": "56490332",
                        "indices": [75, 86]
                    }, {
                        "screen_name": "DaRealBunnyrats",
                        "name": "The Bunnyrats",
                        "id": 3143034258,
                        "id_str": "3143034258",
                        "indices": [87, 103]
                    }, {
                        "screen_name": "Irritating_Cat",
                        "name": "frank the tank",
                        "id": 807833372,
                        "id_str": "807833372",
                        "indices": [104, 119]
                    }, {
                        "screen_name": "RhondaHendee",
                        "name": "Batman & Rhonda",
                        "id": 2363042296,
                        "id_str": "2363042296",
                        "indices": [120, 133]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:40 +0000 2015",
                "id": 659379508215046100,
                "id_str": "659379508215046147",
                "text": "@loser_cat_ しかもサポートが死んでる上に素材的に直せないものもあるとか\nなんで今回のガガガは普通にいいと思うの(バンダイサポートだし)",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": 659378915136266200,
                "in_reply_to_status_id_str": "659378915136266240",
                "in_reply_to_user_id": 590158665,
                "in_reply_to_user_id_str": "590158665",
                "in_reply_to_screen_name": "loser_cat_",
                "user": {
                    "id": 363279583,
                    "id_str": "363279583",
                    "name": "レジーナ・エキドナ",
                    "screen_name": "admesan",
                    "location": "ガブリーヌのいるところ",
                    "description": "アイコンは@tera753 さんヘッダーは@YoutanE07 さんに描いてもらいました",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 559,
                    "friends_count": 520,
                    "listed_count": 29,
                    "created_at": "Sat Aug 27 20:48:08 +0000 2011",
                    "favourites_count": 41254,
                    "utc_offset": 32400,
                    "time_zone": "Tokyo",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 87233,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "9266CC",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/641417423984300032/RUnkc5Dc.jpg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/641417423984300032/RUnkc5Dc.jpg",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/658569061714890752/6QLdV6LS_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/658569061714890752/6QLdV6LS_normal.png",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/363279583/1445712637",
                    "profile_link_color": "28329C",
                    "profile_sidebar_border_color": "A3BCC9",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "loser_cat_",
                        "name": "清純系魔法少女まじかる☆たま(爆乳)",
                        "id": 590158665,
                        "id_str": "590158665",
                        "indices": [0, 11]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:38 +0000 2015",
                "id": 659379503270072300,
                "id_str": "659379503270072320",
                "text": "Caterpillar CAT No 16 Motor Grader Series 49G Parts Book Catalog Manual List '73 https://t.co/QkDMCtmJ3r https://t.co/zGQrMiNjDo",
                "source": "<a href=\"http://ifttt.com\" rel=\"nofollow\">IFTTT</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3910236149,
                    "id_str": "3910236149",
                    "name": "Hilda Snow",
                    "screen_name": "hildasnowzd",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 22,
                    "friends_count": 40,
                    "listed_count": 12,
                    "created_at": "Fri Oct 09 15:57:43 +0000 2015",
                    "favourites_count": 0,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 7840,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/652513682639814656/JaV7nglu_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/652513682639814656/JaV7nglu_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/QkDMCtmJ3r",
                        "expanded_url": "http://abu-dhabi-trip.info/ap/di/?query=191725790110",
                        "display_url": "abu-dhabi-trip.info/ap/di/?query=1…",
                        "indices": [81, 104]
                    }],
                    "media": [{
                        "id": 659379503077204000,
                        "id_str": "659379503077203968",
                        "indices": [105, 128],
                        "media_url": "http://pbs.twimg.com/media/CSaWKh0XIAA6gkM.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaWKh0XIAA6gkM.jpg",
                        "url": "https://t.co/zGQrMiNjDo",
                        "display_url": "pic.twitter.com/zGQrMiNjDo",
                        "expanded_url": "http://twitter.com/hildasnowzd/status/659379503270072320/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 453,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 600,
                                "h": 800,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 750,
                                "h": 1000,
                                "resize": "fit"
                            }
                        }
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:38 +0000 2015",
                "id": 659379502678569000,
                "id_str": "659379502678568961",
                "text": "「人間不信」を調べようと思ったんだきっと\n流れで考えてもあってる",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2515147603,
                    "id_str": "2515147603",
                    "name": "黛煌涅狐ver2.3.1",
                    "screen_name": "dark_cat_571",
                    "location": "地雷のないどこまでも広がる大草原",
                    "description": "「おはようございます!」と「おやすみなさい」は自動　BL百合下ネタ多し　いつか使う垢[@soranokichi]",
                    "url": "http://t.co/iRWPIPs5OZ",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/iRWPIPs5OZ",
                                "expanded_url": "http://twilog.org/dark_cat_571",
                                "display_url": "twilog.org/dark_cat_571",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 845,
                    "friends_count": 833,
                    "listed_count": 22,
                    "created_at": "Thu May 22 10:53:26 +0000 2014",
                    "favourites_count": 7490,
                    "utc_offset": 32400,
                    "time_zone": "Osaka",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 26696,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "B2DFDA",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/628320400624209920/5AIUcrvu.png",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/628320400624209920/5AIUcrvu.png",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/650248867699552257/fabOYvr0_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/650248867699552257/fabOYvr0_normal.png",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2515147603/1437369923",
                    "profile_link_color": "000000",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "FFFFFF",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:38 +0000 2015",
                "id": 659379501143474200,
                "id_str": "659379501143474177",
                "text": "RT @EarnKnowledge: Someone shaved their cat and turned it into Simba https://t.co/N3nInckdxX",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3089259177,
                    "id_str": "3089259177",
                    "name": "David Parker",
                    "screen_name": "david_parkerdc1",
                    "location": "",
                    "description": "Beans and cornbread",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 47,
                    "friends_count": 105,
                    "listed_count": 0,
                    "created_at": "Thu Mar 12 16:39:27 +0000 2015",
                    "favourites_count": 313,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 257,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/642760724272574464/IhpkOceg_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/642760724272574464/IhpkOceg_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3089259177/1426180542",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 04:52:59 +0000 2015",
                    "id": 659231361736179700,
                    "id_str": "659231361736179712",
                    "text": "Someone shaved their cat and turned it into Simba https://t.co/N3nInckdxX",
                    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 843112550,
                        "id_str": "843112550",
                        "name": "Learn Something",
                        "screen_name": "EarnKnowledge",
                        "location": "Worldwide",
                        "description": "Discover amazing photos & gifs while expanding your mind. Learn something new every day with us. I'm not affiliated or claim to own any of the picture & gif!",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 2532800,
                        "friends_count": 850,
                        "listed_count": 5083,
                        "created_at": "Mon Sep 24 07:13:39 +0000 2012",
                        "favourites_count": 165,
                        "utc_offset": 19800,
                        "time_zone": "New Delhi",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 29296,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "EBEBEB",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme7/bg.gif",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme7/bg.gif",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/648501417993351168/xU0EenwS_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/648501417993351168/xU0EenwS_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/843112550/1436640819",
                        "profile_link_color": "990000",
                        "profile_sidebar_border_color": "DFDFDF",
                        "profile_sidebar_fill_color": "F3F3F3",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 865,
                    "favorite_count": 1599,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 659231311161225200,
                            "id_str": "659231311161225216",
                            "indices": [50, 73],
                            "media_url": "http://pbs.twimg.com/media/CSYPYn6UcAAZAe4.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSYPYn6UcAAZAe4.jpg",
                            "url": "https://t.co/N3nInckdxX",
                            "display_url": "pic.twitter.com/N3nInckdxX",
                            "expanded_url": "http://twitter.com/EarnKnowledge/status/659231361736179712/photo/1",
                            "type": "photo",
                            "sizes": {
                                "medium": {
                                    "w": 499,
                                    "h": 668,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 340,
                                    "h": 455,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 499,
                                    "h": 668,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 865,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "EarnKnowledge",
                        "name": "Learn Something",
                        "id": 843112550,
                        "id_str": "843112550",
                        "indices": [3, 17]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 659231311161225200,
                        "id_str": "659231311161225216",
                        "indices": [69, 92],
                        "media_url": "http://pbs.twimg.com/media/CSYPYn6UcAAZAe4.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSYPYn6UcAAZAe4.jpg",
                        "url": "https://t.co/N3nInckdxX",
                        "display_url": "pic.twitter.com/N3nInckdxX",
                        "expanded_url": "http://twitter.com/EarnKnowledge/status/659231361736179712/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 499,
                                "h": 668,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 340,
                                "h": 455,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 499,
                                "h": 668,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659231361736179700,
                        "source_status_id_str": "659231361736179712",
                        "source_user_id": 843112550,
                        "source_user_id_str": "843112550"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:38 +0000 2015",
                "id": 659379500912918500,
                "id_str": "659379500912918528",
                "text": "MY CAT JUST FARTED ON ME",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3054515895,
                    "id_str": "3054515895",
                    "name": "Spøøpy Røsiee",
                    "screen_name": "ABitOfRosiee",
                    "location": "wherever there's wifi",
                    "description": "u may know me as Calum Hood's gf or that emo girl obsessed with BMTH /// @gaskarthsirwxn",
                    "url": "https://t.co/Cu1WA2nwQa",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https://t.co/Cu1WA2nwQa",
                                "expanded_url": "https://twitter.com/imactuallywes/status/644972279558832128",
                                "display_url": "twitter.com/imactuallywes/…",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 2127,
                    "friends_count": 1905,
                    "listed_count": 6,
                    "created_at": "Mon Feb 23 01:47:12 +0000 2015",
                    "favourites_count": 21421,
                    "utc_offset": 0,
                    "time_zone": "Dublin",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 27064,
                    "lang": "Select Language...",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/658999781403054080/inrsc7WU_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/658999781403054080/inrsc7WU_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3054515895/1445952766",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:37 +0000 2015",
                "id": 659379498882830300,
                "id_str": "659379498882830337",
                "text": "RT @KGgirl: Big shout out to 3 reps from the North West in the entrepreneur cat. @siobhanmcsharry@DeirdreMcGlone congrats!@IMAGEie",
                "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 20528740,
                    "id_str": "20528740",
                    "name": "Aoife Porter",
                    "screen_name": "aoifep",
                    "location": "Sligo",
                    "description": "Marketing do-er in the North West, love all things social,  creative & pretty! Runs @SwellSligo",
                    "url": "http://t.co/OKy5QKBP1h",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/OKy5QKBP1h",
                                "expanded_url": "http://www.buamarketing.ie",
                                "display_url": "buamarketing.ie",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 2747,
                    "friends_count": 2848,
                    "listed_count": 71,
                    "created_at": "Tue Feb 10 17:35:21 +0000 2009",
                    "favourites_count": 1070,
                    "utc_offset": 0,
                    "time_zone": "Dublin",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 7177,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "FFFFFF",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/81718345/bua_logo_small_edited-1.jpg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/81718345/bua_logo_small_edited-1.jpg",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/532109040440987648/FpYky8oy_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/532109040440987648/FpYky8oy_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/20528740/1348059287",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:33:07 +0000 2015",
                    "id": 659377357241851900,
                    "id_str": "659377357241851904",
                    "text": "Big shout out to 3 reps from the North West in the entrepreneur cat. @siobhanmcsharry@DeirdreMcGlone congrats!@IMAGEie",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 23131814,
                        "id_str": "23131814",
                        "name": "Kira G Walton",
                        "screen_name": "KGgirl",
                        "location": "Sligo, Ireland",
                        "description": "",
                        "url": "http://t.co/YpROLVPSN9",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/YpROLVPSN9",
                                    "expanded_url": "http://www.voya.ie",
                                    "display_url": "voya.ie",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 55,
                        "friends_count": 42,
                        "listed_count": 1,
                        "created_at": "Fri Mar 06 22:56:15 +0000 2009",
                        "favourites_count": 8,
                        "utc_offset": -28800,
                        "time_zone": "Alaska",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 54,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "352726",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme5/bg.gif",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme5/bg.gif",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/378800000571790519/b9260f004bdad2f84965dac59aa38512_normal.jpeg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000571790519/b9260f004bdad2f84965dac59aa38512_normal.jpeg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/23131814/1413978138",
                        "profile_link_color": "D02B55",
                        "profile_sidebar_border_color": "829D5E",
                        "profile_sidebar_fill_color": "99CC33",
                        "profile_text_color": "3E4415",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 2,
                    "favorite_count": 1,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": []
                    },
                    "favorited": false,
                    "retweeted": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 2,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "KGgirl",
                        "name": "Kira G Walton",
                        "id": 23131814,
                        "id_str": "23131814",
                        "indices": [3, 10]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:37 +0000 2015",
                "id": 659379497431515100,
                "id_str": "659379497431515136",
                "text": "17 Cat Pictures That Go Without Saying, Are The Greatest Cat Pictures Ever Taken https://t.co/S3DFPmhbla",
                "source": "<a href=\"http://www.facebook.com/twitter\" rel=\"nofollow\">Facebook</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 1582161559,
                    "id_str": "1582161559",
                    "name": "The Funny Farm",
                    "screen_name": "LoLFunnyFarm",
                    "location": "",
                    "description": "This is the official page of The Funny Farm as seen on Facebook.. oh and if you follow, I #teamfollowback :)",
                    "url": "http://t.co/nrYmcn810E",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/nrYmcn810E",
                                "expanded_url": "http://thefunnyfarm.lolspots.com/",
                                "display_url": "thefunnyfarm.lolspots.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1149,
                    "friends_count": 1823,
                    "listed_count": 9,
                    "created_at": "Wed Jul 10 03:56:00 +0000 2013",
                    "favourites_count": 2,
                    "utc_offset": -14400,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 36019,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "A4B45D",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/378800000112844149/537b809fd58a47b66414ec2046b22ca0_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000112844149/537b809fd58a47b66414ec2046b22ca0_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1582161559/1373429026",
                    "profile_link_color": "635026",
                    "profile_sidebar_border_color": "A4B45D",
                    "profile_sidebar_fill_color": "CEDBD7",
                    "profile_text_color": "8C9C43",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/S3DFPmhbla",
                        "expanded_url": "http://fb.me/7wjm22vDf",
                        "display_url": "fb.me/7wjm22vDf",
                        "indices": [81, 104]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:37 +0000 2015",
                "id": 659379497423216600,
                "id_str": "659379497423216642",
                "text": "Canada 1985 Trains set UL plate blks of 4 #1071-4 VFNH cat $18.75 locomotives https://t.co/wbyVu96jH3 https://t.co/hQt1mjWz1n",
                "source": "<a href=\"http://ifttt.com\" rel=\"nofollow\">IFTTT</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3037548789,
                    "id_str": "3037548789",
                    "name": "pompous product",
                    "screen_name": "gimenezbartolo",
                    "location": "",
                    "description": "pompous product",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 36,
                    "friends_count": 40,
                    "listed_count": 18,
                    "created_at": "Sat Feb 14 20:51:41 +0000 2015",
                    "favourites_count": 0,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 74917,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/566701707606773760/stGYIZAy_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/566701707606773760/stGYIZAy_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3037548789/1423947203",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/wbyVu96jH3",
                        "expanded_url": "http://germany-tips-trip.info/qt/gy/?query=111808638834",
                        "display_url": "germany-tips-trip.info/qt/gy/?query=1…",
                        "indices": [78, 101]
                    }],
                    "media": [{
                        "id": 659379497230311400,
                        "id_str": "659379497230311424",
                        "indices": [102, 125],
                        "media_url": "http://pbs.twimg.com/media/CSaWKMCWoAA8YtY.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaWKMCWoAA8YtY.jpg",
                        "url": "https://t.co/hQt1mjWz1n",
                        "display_url": "pic.twitter.com/hQt1mjWz1n",
                        "expanded_url": "http://twitter.com/gimenezbartolo/status/659379497423216642/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 376,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 600,
                                "h": 663,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 904,
                                "h": 1000,
                                "resize": "fit"
                            }
                        }
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:37 +0000 2015",
                "id": 659379496361984000,
                "id_str": "659379496361984000",
                "text": "ラブラブ過ぎてたまに俺のMPが逆に削られるけど",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2238597625,
                    "id_str": "2238597625",
                    "name": "カルス",
                    "screen_name": "cat_inhale",
                    "location": "茨 鹿",
                    "description": "節操なき浪人団所属。\n自転車とサブカルチャーが大好きです。\n推し松は一松。",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 81,
                    "friends_count": 110,
                    "listed_count": 0,
                    "created_at": "Tue Dec 10 04:40:11 +0000 2013",
                    "favourites_count": 5580,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 26011,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/628300898809180161/1v-m3NBF_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/628300898809180161/1v-m3NBF_normal.png",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2238597625/1421737509",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:37 +0000 2015",
                "id": 659379495946743800,
                "id_str": "659379495946743809",
                "text": "めっちゃ境遇説明してくれる歌だ",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 322571857,
                    "id_str": "322571857",
                    "name": "ニャブー",
                    "screen_name": "cat_299",
                    "location": "",
                    "description": "成人済み 雑食に腐ってるショタコン HQ/プリパラ/SB69/アイナナ/あんスタ/スタミュ",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 229,
                    "friends_count": 1449,
                    "listed_count": 5,
                    "created_at": "Thu Jun 23 11:47:23 +0000 2011",
                    "favourites_count": 3902,
                    "utc_offset": -39600,
                    "time_zone": "Midway Island",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 37882,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/527031420464545792/ucSfysAI_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/527031420464545792/ucSfysAI_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/322571857/1429887372",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:36 +0000 2015",
                "id": 659379494793277400,
                "id_str": "659379494793277440",
                "text": "@Rido_cat あまねさん右下のやつなんすねーーでかい( ՞ةڼ  )",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": 659379225829347300,
                "in_reply_to_status_id_str": "659379225829347333",
                "in_reply_to_user_id": 3328335252,
                "in_reply_to_user_id_str": "3328335252",
                "in_reply_to_screen_name": "Rido_cat",
                "user": {
                    "id": 3181563278,
                    "id_str": "3181563278",
                    "name": "氷菓子",
                    "screen_name": "ryo_sino",
                    "location": "冷蔵庫",
                    "description": "創作8割版権2割の腐女子です\nツイプロは読んどいた方が良いと思います\nヘッダーのラミカは悠羅[@yuraugo]さんが作ってくれたよまじ天使まじかわいい\n腐垢(ほとんどツイートしない)はこちら[@shinoice1234]",
                    "url": "https://t.co/4QEITvHLwT",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https://t.co/4QEITvHLwT",
                                "expanded_url": "http://twpf.jp/ryo_sino",
                                "display_url": "twpf.jp/ryo_sino",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 286,
                    "friends_count": 295,
                    "listed_count": 13,
                    "created_at": "Fri May 01 10:00:29 +0000 2015",
                    "favourites_count": 7473,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 19344,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/658660735539539968/-wzq3zFh_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/658660735539539968/-wzq3zFh_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3181563278/1445860433",
                    "profile_link_color": "89C9FA",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "Rido_cat",
                        "name": "狸奴",
                        "id": 3328335252,
                        "id_str": "3328335252",
                        "indices": [0, 9]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:36 +0000 2015",
                "id": 659379494411747300,
                "id_str": "659379494411747328",
                "text": "Caterpillar’s  Rating Reaffirmed at Raymond James $CAT https://t.co/LJ4xgPEVDi",
                "source": "<a href=\"http://ifttt.com\" rel=\"nofollow\">IFTTT</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2743641378,
                    "id_str": "2743641378",
                    "name": "Sleek Money",
                    "screen_name": "SleekMoneycom",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 638,
                    "friends_count": 0,
                    "listed_count": 56,
                    "created_at": "Tue Aug 19 01:57:20 +0000 2014",
                    "favourites_count": 0,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 258800,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/501548634412838914/LR6q5snv_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/501548634412838914/LR6q5snv_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2743641378/1408413498",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [{
                        "text": "CAT",
                        "indices": [50, 54]
                    }],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/LJ4xgPEVDi",
                        "expanded_url": "http://ift.tt/1RBpcG2",
                        "display_url": "ift.tt/1RBpcG2",
                        "indices": [55, 78]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:36 +0000 2015",
                "id": 659379492062941200,
                "id_str": "659379492062941184",
                "text": ".OKCThunder host Tim Duncan's Spurs in their season opener - LIVE on SS6/SS9 at 01:50 (CAT). #SSNBA https://t.co/OodABoauxn",
                "source": "<a href=\"http://ifttt.com\" rel=\"nofollow\">IFTTT</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 1659939906,
                    "id_str": "1659939906",
                    "name": "#FULLGIST",
                    "screen_name": "FULLGIST",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1036,
                    "friends_count": 1130,
                    "listed_count": 51,
                    "created_at": "Sat Aug 10 12:06:42 +0000 2013",
                    "favourites_count": 2,
                    "utc_offset": -39600,
                    "time_zone": "Midway Island",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 53239,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "642D8B",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme10/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme10/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/659367837635596288/BiW1OwB0_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/659367837635596288/BiW1OwB0_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1659939906/1443116727",
                    "profile_link_color": "FF0000",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "SSNBA",
                        "indices": [93, 99]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/OodABoauxn",
                        "expanded_url": "https://t.co/7UyBblR4ki",
                        "display_url": "t.co/7UyBblR4ki",
                        "indices": [100, 123]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:36 +0000 2015",
                "id": 659379491735797800,
                "id_str": "659379491735797760",
                "text": "Estan passant coses: IT DANSA + Col•lectiu LIANT LA TROCA + @mercatflors + @MarabalArt  https://t.co/VKhuSR0378",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 220956630,
                    "id_str": "220956630",
                    "name": "Comusitària",
                    "screen_name": "comusitaria",
                    "location": "Catalunya",
                    "description": "Proyectos artísticos comunitarios:\n#Periplus / @riborquestra / @artandcoach",
                    "url": "http://t.co/G3jtGENV5B",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/G3jtGENV5B",
                                "expanded_url": "http://comusitaria.wix.com/comusitaria",
                                "display_url": "comusitaria.wix.com/comusitaria",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1168,
                    "friends_count": 1581,
                    "listed_count": 49,
                    "created_at": "Mon Nov 29 10:08:17 +0000 2010",
                    "favourites_count": 337,
                    "utc_offset": 3600,
                    "time_zone": "Madrid",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 1803,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "131516",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/525291288287924224/z5QjOu6J_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/525291288287924224/z5QjOu6J_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/220956630/1418916927",
                    "profile_link_color": "1D9A9C",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "FCF2F9",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "mercatflors",
                        "name": "Mercat de les Flors",
                        "id": 87170798,
                        "id_str": "87170798",
                        "indices": [60, 72]
                    }, {
                        "screen_name": "MarabalArt",
                        "name": "Marabal",
                        "id": 610199322,
                        "id_str": "610199322",
                        "indices": [75, 86]
                    }],
                    "urls": [{
                        "url": "https://t.co/VKhuSR0378",
                        "expanded_url": "http://mercatflors.cat/espectacle/portes-obertes/",
                        "display_url": "mercatflors.cat/espectacle/por…",
                        "indices": [88, 111]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:35 +0000 2015",
                "id": 659379490603167700,
                "id_str": "659379490603167745",
                "text": "お気軽お手軽相互フォロー！！！何が何でもフォロー返します～！！ #相互フォロー   #フォロー #リフォロー #フォロー返し",
                "source": "<a href=\"http://1996.4.tool.ms/\" rel=\"nofollow\">お気軽お手軽～相互フォロー！！！</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2480757320,
                    "id_str": "2480757320",
                    "name": "お気軽お手軽相互フォロー！！！",
                    "screen_name": "pet_cat_dog_pet",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 5652,
                    "friends_count": 467,
                    "listed_count": 13,
                    "created_at": "Tue May 06 23:56:38 +0000 2014",
                    "favourites_count": 0,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 148189,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/488368218176622593/O9MOOn22_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/488368218176622593/O9MOOn22_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2480757320/1405271045",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "相互フォロー",
                        "indices": [32, 39]
                    }, {
                        "text": "フォロー",
                        "indices": [42, 47]
                    }, {
                        "text": "リフォロー",
                        "indices": [48, 54]
                    }, {
                        "text": "フォロー返し",
                        "indices": [55, 62]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:35 +0000 2015",
                "id": 659379488464183300,
                "id_str": "659379488464183296",
                "text": "Back to the band......So Patty The Black cat said, Now we need to practice some songs!!!!",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2374886480,
                    "id_str": "2374886480",
                    "name": "Patty The Black Cat",
                    "screen_name": "PattyTheBlackCa",
                    "location": "delray beach, florida",
                    "description": "tv addict/story teller/mouse catcher/books/video ebooks/free spirit",
                    "url": "http://t.co/NiouWCwoQg",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/NiouWCwoQg",
                                "expanded_url": "http://worldtv.com/patty_the_black_cat/web",
                                "display_url": "worldtv.com/patty_the_blac…",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 653,
                    "friends_count": 1992,
                    "listed_count": 1,
                    "created_at": "Thu Mar 06 05:49:47 +0000 2014",
                    "favourites_count": 512,
                    "utc_offset": -14400,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 2303,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "131214",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/441460994296926208/hgUjO9Mv.jpeg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/441460994296926208/hgUjO9Mv.jpeg",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/441451325021102081/kkktLHlF_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/441451325021102081/kkktLHlF_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2374886480/1398359532",
                    "profile_link_color": "B30098",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:35 +0000 2015",
                "id": 659379488124354600,
                "id_str": "659379488124354560",
                "text": "# Cat Training-The Sneaky Ways Your Cat Trains You https://t.co/P5gITP122e",
                "source": "<a href=\"http://publicize.wp.com/\" rel=\"nofollow\">WordPress.com</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3823054452,
                    "id_str": "3823054452",
                    "name": "Olivia J. Short",
                    "screen_name": "oliviajshort_j",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 32,
                    "friends_count": 139,
                    "listed_count": 2,
                    "created_at": "Thu Oct 08 07:53:00 +0000 2015",
                    "favourites_count": 13,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 2711,
                    "lang": "vi",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/652029058969042945/MMPxk7b-_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/652029058969042945/MMPxk7b-_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/P5gITP122e",
                        "expanded_url": "http://catty.xyz/2015/10/28/cat-training-the-sneaky-ways-your-cat-trains-you/",
                        "display_url": "catty.xyz/2015/10/28/cat…",
                        "indices": [51, 74]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:35 +0000 2015",
                "id": 659379488074002400,
                "id_str": "659379488074002433",
                "text": "かわいいにゃーん https://t.co/f7JxkdkwRJ",
                "source": "<a href=\"http://cat.com\" rel=\"nofollow\">pictwitanimal</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3267991285,
                    "id_str": "3267991285",
                    "name": "かわいい猫の写真集",
                    "screen_name": "love_cat_lab",
                    "location": "",
                    "description": "試験運用中。かわいい猫の写真を自動収集してツイートします。たまに変なものが混ざることがありますがご容赦ください。対応検討中です。",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1173,
                    "friends_count": 1290,
                    "listed_count": 3,
                    "created_at": "Sat Jul 04 09:26:13 +0000 2015",
                    "favourites_count": 1,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 25648,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/618428348620869632/uxESr7GC_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/618428348620869632/uxESr7GC_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3267991285/1436002383",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [],
                    "media": [{
                        "id": 659379487134474200,
                        "id_str": "659379487134474240",
                        "indices": [9, 32],
                        "media_url": "http://pbs.twimg.com/media/CSaWJmbUYAAF9Xl.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaWJmbUYAAF9Xl.jpg",
                        "url": "https://t.co/f7JxkdkwRJ",
                        "display_url": "pic.twitter.com/f7JxkdkwRJ",
                        "expanded_url": "http://twitter.com/love_cat_lab/status/659379488074002433/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 425,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 500,
                                "h": 625,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 500,
                                "h": 625,
                                "resize": "fit"
                            }
                        }
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:34 +0000 2015",
                "id": 659379485171580900,
                "id_str": "659379485171580928",
                "text": "RT @fest_ruru: 【拡散希望】\nキャンセル出たためチケットお譲り致します\n\n11/2 BIG CAT FEST VAINQUEUR\n最優先先行 SSチケ 350番代 1枚 \n1枚→1000円\n\n当日手渡し、振込後郵送をご希望の場合は簡易簡易または速達のみ、迅速にご対…",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2474013740,
                    "id_str": "2474013740",
                    "name": "muu",
                    "screen_name": "muu_ring",
                    "location": "",
                    "description": "取引用アカウント",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 35,
                    "friends_count": 46,
                    "listed_count": 0,
                    "created_at": "Fri May 02 13:18:06 +0000 2014",
                    "favourites_count": 6,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 538,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/462222708550299648/duAav7fi_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/462222708550299648/duAav7fi_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2474013740/1399037394",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "ja",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 04:22:14 +0000 2015",
                    "id": 659223623438241800,
                    "id_str": "659223623438241792",
                    "text": "【拡散希望】\nキャンセル出たためチケットお譲り致します\n\n11/2 BIG CAT FEST VAINQUEUR\n最優先先行 SSチケ 350番代 1枚 \n1枚→1000円\n\n当日手渡し、振込後郵送をご希望の場合は簡易簡易または速達のみ、迅速にご対応いただける方でお願い致します。",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 2550061927,
                        "id_str": "2550061927",
                        "name": "る✩",
                        "screen_name": "fest_ruru",
                        "location": "関西",
                        "description": "お取引垢です。検索から大歓迎です。ゆうちょ対応しています。※必ずツイプロ参照してからのお取引をお願い致します※ 迅速で気持ちの良いお取引をできるように心がけておりますのでどうぞ宜しくお願い致します(^o^)",
                        "url": "https://t.co/yEFYWSHla7",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https://t.co/yEFYWSHla7",
                                    "expanded_url": "http://twpf.jp/fest_ruru",
                                    "display_url": "twpf.jp/fest_ruru",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 152,
                        "friends_count": 145,
                        "listed_count": 0,
                        "created_at": "Fri Jun 06 13:37:48 +0000 2014",
                        "favourites_count": 2,
                        "utc_offset": null,
                        "time_zone": null,
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 1244,
                        "lang": "ja",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/651446894195904512/e0UtGdcL_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/651446894195904512/e0UtGdcL_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2550061927/1402070505",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 36,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": []
                    },
                    "favorited": false,
                    "retweeted": false,
                    "lang": "ja"
                },
                "is_quote_status": false,
                "retweet_count": 36,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "fest_ruru",
                        "name": "る✩",
                        "id": 2550061927,
                        "id_str": "2550061927",
                        "indices": [3, 13]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:34 +0000 2015",
                "id": 659379483779031000,
                "id_str": "659379483779031040",
                "text": "RT @time_60ss: 辛い事があったなら\n幸せな事が起きる前ぶれ",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3155651456,
                    "id_str": "3155651456",
                    "name": "なかむら ありさ",
                    "screen_name": "0224_cat",
                    "location": "7人の笑顔があるから元気になれる♡",
                    "description": "日高県住み♡/本中3B元バレー部☞大網食工 1-C30番 ୨୧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈୨୧ 【@AAA_staff 】【@SkyHidaka】【@A_Shinjirooooo】LOVE⇒AAA/ 日高光啓 / 與真司郎 / あたひだ推しのall /Next↪︎12/06與握手会",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 360,
                    "friends_count": 347,
                    "listed_count": 8,
                    "created_at": "Tue Apr 14 10:21:59 +0000 2015",
                    "favourites_count": 8739,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 3452,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/658270521973276672/bJqEUo9D_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/658270521973276672/bJqEUo9D_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3155651456/1444058065",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "ja",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:30:02 +0000 2015",
                    "id": 659376582629290000,
                    "id_str": "659376582629289984",
                    "text": "辛い事があったなら\n幸せな事が起きる前ぶれ",
                    "source": "<a href=\"https://www.facebook.com/Time-730053680381347/timeline/\" rel=\"nofollow\">clearskyfre</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 2406915096,
                        "id_str": "2406915096",
                        "name": "time",
                        "screen_name": "time_60ss",
                        "location": "時間",
                        "description": "20万フォロワー突破記念‼︎ 新サイトをOPENしました。",
                        "url": "http://t.co/gMiM8uLxGM",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/gMiM8uLxGM",
                                    "expanded_url": "http://times.diet/",
                                    "display_url": "times.diet",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 258388,
                        "friends_count": 3789,
                        "listed_count": 445,
                        "created_at": "Sun Mar 23 12:40:55 +0000 2014",
                        "favourites_count": 8,
                        "utc_offset": 32400,
                        "time_zone": "Seoul",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 18077,
                        "lang": "ja",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/502412571207426048/s8PcOIIA_normal.jpeg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/502412571207426048/s8PcOIIA_normal.jpeg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2406915096/1408619471",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 275,
                    "favorite_count": 553,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": []
                    },
                    "favorited": false,
                    "retweeted": false,
                    "lang": "ja"
                },
                "is_quote_status": false,
                "retweet_count": 275,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "time_60ss",
                        "name": "time",
                        "id": 2406915096,
                        "id_str": "2406915096",
                        "indices": [3, 13]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:34 +0000 2015",
                "id": 659379483548368900,
                "id_str": "659379483548368896",
                "text": "RT @BRINGME21PILOTS: Cat-mouflage 😹 https://t.co/E6AZE1a9zN",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 219953752,
                    "id_str": "219953752",
                    "name": "Fiqqqqq",
                    "screen_name": "Shafiqlame",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 502,
                    "friends_count": 401,
                    "listed_count": 2,
                    "created_at": "Fri Nov 26 10:53:01 +0000 2010",
                    "favourites_count": 2045,
                    "utc_offset": -36000,
                    "time_zone": "Hawaii",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 42373,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "BADFCD",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme12/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme12/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/653956582686916608/8QCN9EDJ_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/653956582686916608/8QCN9EDJ_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/219953752/1446041864",
                    "profile_link_color": "FF0000",
                    "profile_sidebar_border_color": "F2E195",
                    "profile_sidebar_fill_color": "FFF7CC",
                    "profile_text_color": "0C3E53",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "und",
                        "result_type": "recent"
                    },
                    "created_at": "Tue Oct 27 08:52:44 +0000 2015",
                    "id": 658929308795191300,
                    "id_str": "658929308795191296",
                    "text": "Cat-mouflage 😹 https://t.co/E6AZE1a9zN",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 213196599,
                        "id_str": "213196599",
                        "name": "⊬ nab",
                        "screen_name": "BRINGME21PILOTS",
                        "location": "",
                        "description": "go on and stalk while you can",
                        "url": "https://t.co/OsuqOldzDh",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https://t.co/OsuqOldzDh",
                                    "expanded_url": "http://instagram.com/bringme21pilots",
                                    "display_url": "instagram.com/bringme21pilots",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 713,
                        "friends_count": 387,
                        "listed_count": 3,
                        "created_at": "Mon Nov 08 07:19:23 +0000 2010",
                        "favourites_count": 640,
                        "utc_offset": -28800,
                        "time_zone": "Alaska",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 44764,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "000000",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/344511763024957027/45774088a56d5da0c72b0f0c9fa7bc12.jpeg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/344511763024957027/45774088a56d5da0c72b0f0c9fa7bc12.jpeg",
                        "profile_background_tile": true,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/658639715818561536/OF6VOfCV_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/658639715818561536/OF6VOfCV_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/213196599/1443463832",
                        "profile_link_color": "4A913C",
                        "profile_sidebar_border_color": "000000",
                        "profile_sidebar_fill_color": "000000",
                        "profile_text_color": "FF0088",
                        "profile_use_background_image": true,
                        "has_extended_profile": true,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 88,
                    "favorite_count": 16,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 658929298909204500,
                            "id_str": "658929298909204480",
                            "indices": [15, 38],
                            "media_url": "http://pbs.twimg.com/media/CST8tMmUkAAQrTU.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CST8tMmUkAAQrTU.jpg",
                            "url": "https://t.co/E6AZE1a9zN",
                            "display_url": "pic.twitter.com/E6AZE1a9zN",
                            "expanded_url": "http://twitter.com/BRINGME21PILOTS/status/658929308795191296/photo/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 340,
                                    "h": 346,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 605,
                                    "h": 617,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 600,
                                    "h": 611,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "und"
                },
                "is_quote_status": false,
                "retweet_count": 88,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "BRINGME21PILOTS",
                        "name": "⊬ nab",
                        "id": 213196599,
                        "id_str": "213196599",
                        "indices": [3, 19]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 658929298909204500,
                        "id_str": "658929298909204480",
                        "indices": [36, 59],
                        "media_url": "http://pbs.twimg.com/media/CST8tMmUkAAQrTU.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CST8tMmUkAAQrTU.jpg",
                        "url": "https://t.co/E6AZE1a9zN",
                        "display_url": "pic.twitter.com/E6AZE1a9zN",
                        "expanded_url": "http://twitter.com/BRINGME21PILOTS/status/658929308795191296/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 346,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 605,
                                "h": 617,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 600,
                                "h": 611,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 658929308795191300,
                        "source_status_id_str": "658929308795191296",
                        "source_user_id": 213196599,
                        "source_user_id_str": "213196599"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:33 +0000 2015",
                "id": 659379480536875000,
                "id_str": "659379480536875009",
                "text": "@kinkoune_nowaki Did you see my cat Majka? She was here a few minutes ago ;;",
                "source": "<a href=\"http://twittbot.net/\" rel=\"nofollow\">twittbot.net</a>",
                "truncated": false,
                "in_reply_to_status_id": 659378100262727700,
                "in_reply_to_status_id_str": "659378100262727680",
                "in_reply_to_user_id": 525287186,
                "in_reply_to_user_id_str": "525287186",
                "in_reply_to_screen_name": "kinkoune_nowaki",
                "user": {
                    "id": 279155820,
                    "id_str": "279155820",
                    "name": "Diana Kunikida",
                    "screen_name": "KunikidaDia_bot",
                    "location": "",
                    "description": "Hey ^^ I'm Diana, the UTAU of @xXDianaTanXx owo Avatar by GaySalt~",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 309,
                    "friends_count": 389,
                    "listed_count": 5,
                    "created_at": "Fri Apr 08 18:03:52 +0000 2011",
                    "favourites_count": 0,
                    "utc_offset": 3600,
                    "time_zone": "Amsterdam",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 79539,
                    "lang": "de",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "642D8B",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme10/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme10/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/3064695825/aa0d5e922c4c5dc3c661fd93ef9d2beb_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/3064695825/aa0d5e922c4c5dc3c661fd93ef9d2beb_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/279155820/1357504060",
                    "profile_link_color": "FF0000",
                    "profile_sidebar_border_color": "65B0DA",
                    "profile_sidebar_fill_color": "7AC3EE",
                    "profile_text_color": "3D1957",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "kinkoune_nowaki",
                        "name": "均衡音ノワキ",
                        "id": 525287186,
                        "id_str": "525287186",
                        "indices": [0, 16]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:33 +0000 2015",
                "id": 659379478766850000,
                "id_str": "659379478766850048",
                "text": "@IAmCatTrailmixx How have ya' been Cat!? It's been a while.",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": 659379275330555900,
                "in_reply_to_status_id_str": "659379275330555904",
                "in_reply_to_user_id": 922282862,
                "in_reply_to_user_id_str": "922282862",
                "in_reply_to_screen_name": "IAmCatTrailmixx",
                "user": {
                    "id": 3181513441,
                    "id_str": "3181513441",
                    "name": "The Joker.",
                    "screen_name": "TheClownKing",
                    "location": "Gotham, City/Arkham Asylum",
                    "description": "|DCRP|  |Literate.|",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 612,
                    "friends_count": 961,
                    "listed_count": 1,
                    "created_at": "Fri May 01 08:06:54 +0000 2015",
                    "favourites_count": 425,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 2625,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "4A913C",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/645451099961298944/b6WQq3Fj.jpg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/645451099961298944/b6WQq3Fj.jpg",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/659091079120064514/5a0S2nmY_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/659091079120064514/5a0S2nmY_normal.png",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3181513441/1442246765",
                    "profile_link_color": "9266CC",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "IAmCatTrailmixx",
                        "name": "Cat",
                        "id": 922282862,
                        "id_str": "922282862",
                        "indices": [0, 16]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "bg",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:33 +0000 2015",
                "id": 659379478704103400,
                "id_str": "659379478704103424",
                "text": "Груевски: Пораката на Твитер е реалноста од исходот на изборите https://t.co/cXg0pvazYg via @NovaTvMk",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 32362974,
                    "id_str": "32362974",
                    "name": "Sekulovska",
                    "screen_name": "Sekulovska",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 2425,
                    "friends_count": 492,
                    "listed_count": 8,
                    "created_at": "Fri Apr 17 10:31:53 +0000 2009",
                    "favourites_count": 276,
                    "utc_offset": 3600,
                    "time_zone": "Brussels",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 7041,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "BADFCD",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme12/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme12/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/1154497736/b_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1154497736/b_normal.jpg",
                    "profile_link_color": "FF0000",
                    "profile_sidebar_border_color": "F2E195",
                    "profile_sidebar_fill_color": "FFF7CC",
                    "profile_text_color": "0C3E53",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "NovaTvMk",
                        "name": "НОВА",
                        "id": 1093262388,
                        "id_str": "1093262388",
                        "indices": [92, 101]
                    }],
                    "urls": [{
                        "url": "https://t.co/cXg0pvazYg",
                        "expanded_url": "http://novatv.mk/index.php?p=1&navig=8&cat=2&vest=25177",
                        "display_url": "novatv.mk/index.php?p=1&…",
                        "indices": [64, 87]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "bg"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:32 +0000 2015",
                "id": 659379475646251000,
                "id_str": "659379475646251009",
                "text": "RT @TheAnimalVines: Pirate cat 💀😼 https://t.co/5mOylTXo80",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 561698919,
                    "id_str": "561698919",
                    "name": "Oscar",
                    "screen_name": "fvckoscar",
                    "location": "",
                    "description": "Halie Lambert ❤️",
                    "url": "http://t.co/Jq4Y7zvh4i",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/Jq4Y7zvh4i",
                                "expanded_url": "http://Ask.fm/AwhskerSoretoe",
                                "display_url": "Ask.fm/AwhskerSoretoe",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 8001,
                    "friends_count": 4617,
                    "listed_count": 1,
                    "created_at": "Tue Apr 24 01:17:52 +0000 2012",
                    "favourites_count": 2718,
                    "utc_offset": -10800,
                    "time_zone": "Atlantic Time (Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 18224,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/767517467/16c8cb1aff6dd14c26e28cb8770a9682.jpeg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/767517467/16c8cb1aff6dd14c26e28cb8770a9682.jpeg",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/608366323605860352/gzZHlBpY_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/608366323605860352/gzZHlBpY_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/561698919/1432423278",
                    "profile_link_color": "000000",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Tue Oct 27 23:58:03 +0000 2015",
                    "id": 659157140012056600,
                    "id_str": "659157140012056577",
                    "text": "Pirate cat 💀😼 https://t.co/5mOylTXo80",
                    "source": "<a href=\"http://twitter.com/#!/download/ipad\" rel=\"nofollow\">Twitter for iPad</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 2357600840,
                        "id_str": "2357600840",
                        "name": "Animal Vines",
                        "screen_name": "TheAnimalVines",
                        "location": "Turn On Notifications",
                        "description": "We Post All The Best Animal Vines. *Original Fan/Parody Account* NOT Affiliated With @Vine. We Do Not Own The Vines That Are Posted!",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 193481,
                        "friends_count": 269,
                        "listed_count": 88,
                        "created_at": "Sun Feb 23 07:09:52 +0000 2014",
                        "favourites_count": 3,
                        "utc_offset": -25200,
                        "time_zone": "Arizona",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 451,
                        "lang": "en-gb",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/587786668561661952/jGQJsf3L_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/587786668561661952/jGQJsf3L_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2357600840/1431193393",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 779,
                    "favorite_count": 1135,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 659156892128677900,
                            "id_str": "659156892128677888",
                            "indices": [14, 37],
                            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/659156892128677888/pu/img/omewwaY3smMZ4wrU.jpg",
                            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/659156892128677888/pu/img/omewwaY3smMZ4wrU.jpg",
                            "url": "https://t.co/5mOylTXo80",
                            "display_url": "pic.twitter.com/5mOylTXo80",
                            "expanded_url": "http://twitter.com/TheAnimalVines/status/659157140012056577/video/1",
                            "type": "photo",
                            "sizes": {
                                "large": {
                                    "w": 480,
                                    "h": 480,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 340,
                                    "h": 340,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 480,
                                    "h": 480,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 779,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "TheAnimalVines",
                        "name": "Animal Vines",
                        "id": 2357600840,
                        "id_str": "2357600840",
                        "indices": [3, 18]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 659156892128677900,
                        "id_str": "659156892128677888",
                        "indices": [34, 57],
                        "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/659156892128677888/pu/img/omewwaY3smMZ4wrU.jpg",
                        "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/659156892128677888/pu/img/omewwaY3smMZ4wrU.jpg",
                        "url": "https://t.co/5mOylTXo80",
                        "display_url": "pic.twitter.com/5mOylTXo80",
                        "expanded_url": "http://twitter.com/TheAnimalVines/status/659157140012056577/video/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 480,
                                "h": 480,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 340,
                                "h": 340,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 480,
                                "h": 480,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659157140012056600,
                        "source_status_id_str": "659157140012056577",
                        "source_user_id": 2357600840,
                        "source_user_id_str": "2357600840"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "es",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:32 +0000 2015",
                "id": 659379474706899000,
                "id_str": "659379474706898944",
                "text": "RT @Diario_ElDia: #SantaCruz Inicia la XXIII Asamblea de Fiscales con participación de 20 países ➜ https://t.co/aEybacfk73 https://t.co/BgF…",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 366278526,
                    "id_str": "366278526",
                    "name": "Julyana",
                    "screen_name": "jetyepsu",
                    "location": "Cochabamba-Bolivia",
                    "description": "Periodista de Los Tiempos. \r\nPara ejercer el periodismo, ante todo, hay que ser buenos seres humanos.(Ryszard Kapuściński)",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 336,
                    "friends_count": 672,
                    "listed_count": 15,
                    "created_at": "Thu Sep 01 22:08:01 +0000 2011",
                    "favourites_count": 26,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 1942,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "642D8B",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme10/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme10/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/3517463444/fdd0649eed9455b62902eab8687267a7_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/3517463444/fdd0649eed9455b62902eab8687267a7_normal.jpeg",
                    "profile_link_color": "FF0000",
                    "profile_sidebar_border_color": "65B0DA",
                    "profile_sidebar_fill_color": "7AC3EE",
                    "profile_text_color": "3D1957",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "es",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:32:19 +0000 2015",
                    "id": 659377157257433100,
                    "id_str": "659377157257433088",
                    "text": "#SantaCruz Inicia la XXIII Asamblea de Fiscales con participación de 20 países ➜ https://t.co/aEybacfk73 https://t.co/BgFhk1UTeC",
                    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 144678130,
                        "id_str": "144678130",
                        "name": "El Dia",
                        "screen_name": "Diario_ElDia",
                        "location": "Santa Cruz - Bolivia",
                        "description": "EL DIA.\r\nDiario independiente de circulación nacional\r\nFundado en 1.987\r\nEDITORIAL DIA A DIA S.A\r\nTel. 3434040, Fax:3434041\r\nBolivia",
                        "url": "http://t.co/xJH6mYHtZT",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/xJH6mYHtZT",
                                    "expanded_url": "http://www.eldia.com.bo",
                                    "display_url": "eldia.com.bo",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 52556,
                        "friends_count": 371,
                        "listed_count": 287,
                        "created_at": "Mon May 17 01:08:10 +0000 2010",
                        "favourites_count": 27,
                        "utc_offset": -14400,
                        "time_zone": "La Paz",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 55748,
                        "lang": "es",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "ECF5FE",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/110462038/fondo_twitter.png",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/110462038/fondo_twitter.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/654732898482786304/u-BRqhQW_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/654732898482786304/u-BRqhQW_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/144678130/1405633483",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "FAEBD7",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": {
                        "id": "c4320f726d222937",
                        "url": "https://api.twitter.com/1.1/geo/id/c4320f726d222937.json",
                        "place_type": "country",
                        "name": "Bolivia",
                        "full_name": "Bolivia",
                        "country_code": "BO",
                        "country": "Bolivia",
                        "contained_within": [],
                        "bounding_box": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [-69.6407623, -22.897682],
                                    [-57.453894, -22.897682],
                                    [-57.453894, -9.669105],
                                    [-69.6407623, -9.669105]
                                ]
                            ]
                        },
                        "attributes": {}
                    },
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [{
                            "text": "SantaCruz",
                            "indices": [0, 10]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https://t.co/aEybacfk73",
                            "expanded_url": "http://goo.gl/ptFhSU",
                            "display_url": "goo.gl/ptFhSU",
                            "indices": [81, 104]
                        }],
                        "media": [{
                            "id": 659377127746347000,
                            "id_str": "659377127746347008",
                            "indices": [105, 128],
                            "media_url": "http://pbs.twimg.com/media/CSaUARBWoAAOqah.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSaUARBWoAAOqah.jpg",
                            "url": "https://t.co/BgFhk1UTeC",
                            "display_url": "pic.twitter.com/BgFhk1UTeC",
                            "expanded_url": "http://twitter.com/Diario_ElDia/status/659377157257433088/photo/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 340,
                                    "h": 226,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 600,
                                    "h": 400,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 1024,
                                    "h": 682,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "es"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "SantaCruz",
                        "indices": [18, 28]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "Diario_ElDia",
                        "name": "El Dia",
                        "id": 144678130,
                        "id_str": "144678130",
                        "indices": [3, 16]
                    }],
                    "urls": [{
                        "url": "https://t.co/aEybacfk73",
                        "expanded_url": "http://goo.gl/ptFhSU",
                        "display_url": "goo.gl/ptFhSU",
                        "indices": [99, 122]
                    }],
                    "media": [{
                        "id": 659377127746347000,
                        "id_str": "659377127746347008",
                        "indices": [123, 140],
                        "media_url": "http://pbs.twimg.com/media/CSaUARBWoAAOqah.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaUARBWoAAOqah.jpg",
                        "url": "https://t.co/BgFhk1UTeC",
                        "display_url": "pic.twitter.com/BgFhk1UTeC",
                        "expanded_url": "http://twitter.com/Diario_ElDia/status/659377157257433088/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 226,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 600,
                                "h": 400,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 1024,
                                "h": 682,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659377157257433100,
                        "source_status_id_str": "659377157257433088",
                        "source_user_id": 144678130,
                        "source_user_id_str": "144678130"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "es"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:31 +0000 2015",
                "id": 659379474018861000,
                "id_str": "659379474018861056",
                "text": "@cat_ren_cat ほんとに吐きそう",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": 659379309354704900,
                "in_reply_to_status_id_str": "659379309354704896",
                "in_reply_to_user_id": 2350228590,
                "in_reply_to_user_id_str": "2350228590",
                "in_reply_to_screen_name": "cat_ren_cat",
                "user": {
                    "id": 1344183457,
                    "id_str": "1344183457",
                    "name": "佐久間 暖",
                    "screen_name": "sakuma0706",
                    "location": "",
                    "description": "辰巳台東MBC→辰巳台中→千葉商業バスケ部#7 引退",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 912,
                    "friends_count": 514,
                    "listed_count": 1,
                    "created_at": "Thu Apr 11 11:40:09 +0000 2013",
                    "favourites_count": 1820,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 4832,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/650237507192229888/bZlJI0ZT_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/650237507192229888/bZlJI0ZT_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1344183457/1441837767",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 1,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "cat_ren_cat",
                        "name": "れん(渡)",
                        "id": 2350228590,
                        "id_str": "2350228590",
                        "indices": [0, 12]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "es",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:31 +0000 2015",
                "id": 659379471540166700,
                "id_str": "659379471540166656",
                "text": "RT @kikucule: ¿Podría explicar la Chacón pq su cuñado salió de la nada y acabó siendo gerente del hospital de Viladecans? #fracturacatalana…",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 280174017,
                    "id_str": "280174017",
                    "name": "Jordi Caballeria DUI",
                    "screen_name": "cat_non_stop",
                    "location": "Sabadell, Països Catalans",
                    "description": "Membre Assemblea Nacional Catalana, ANC. Entre tots ho farem possible i ho tenim més a prop del que ens pensem. El dia de la Independència per fi veurem la llum",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1456,
                    "friends_count": 1662,
                    "listed_count": 25,
                    "created_at": "Sun Apr 10 20:02:12 +0000 2011",
                    "favourites_count": 368,
                    "utc_offset": 3600,
                    "time_zone": "Bern",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 8832,
                    "lang": "ca",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/646055666411569153/atwR6dOR_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/646055666411569153/atwR6dOR_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/280174017/1348871880",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "es",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 12:58:41 +0000 2015",
                    "id": 659353594320265200,
                    "id_str": "659353594320265216",
                    "text": "¿Podría explicar la Chacón pq su cuñado salió de la nada y acabó siendo gerente del hospital de Viladecans? #fracturacatalanaarv",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 245355537,
                        "id_str": "245355537",
                        "name": "IMPUTAT",
                        "screen_name": "kikucule",
                        "location": "Barcelona, Catalunya",
                        "description": "Cule. #ViaClaver ||*|| Països Catalans. TRAM 119 #ViaLliure",
                        "url": "http://t.co/b2dXX4Lp2G",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/b2dXX4Lp2G",
                                    "expanded_url": "http://carlos-unculecualquieraymas.blogspot.com.es",
                                    "display_url": "…-unculecualquieraymas.blogspot.com.es",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 4772,
                        "friends_count": 3677,
                        "listed_count": 115,
                        "created_at": "Mon Jan 31 14:10:23 +0000 2011",
                        "favourites_count": 13371,
                        "utc_offset": 3600,
                        "time_zone": "Madrid",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 162363,
                        "lang": "ca",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/664931654/8e036632d8a2b3bfbb2282e73800780a.jpeg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/664931654/8e036632d8a2b3bfbb2282e73800780a.jpeg",
                        "profile_background_tile": true,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/654928016582299648/atnSXvOd_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/654928016582299648/atnSXvOd_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/245355537/1431889532",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 33,
                    "favorite_count": 24,
                    "entities": {
                        "hashtags": [{
                            "text": "fracturacatalanaarv",
                            "indices": [108, 128]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": []
                    },
                    "favorited": false,
                    "retweeted": false,
                    "lang": "es"
                },
                "is_quote_status": false,
                "retweet_count": 33,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "fracturacatalanaarv",
                        "indices": [122, 140]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "kikucule",
                        "name": "IMPUTAT",
                        "id": 245355537,
                        "id_str": "245355537",
                        "indices": [3, 12]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "es"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:31 +0000 2015",
                "id": 659379470193655800,
                "id_str": "659379470193655808",
                "text": "RT @sailormoron: i was gonna try to find a pic of kotori with a cat for you and you are the first result @kotoriminamis https://t.co/RxPGvu…",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 1119760788,
                    "id_str": "1119760788",
                    "name": "kotori's spooky wife",
                    "screen_name": "kotoriminamis",
                    "location": "HTX ♡ cat ♡ she/her ♡ 16",
                    "description": "still waiting for kotori smile UR #315 to come home | icon by @Iovewing ❊ | personal: @erenjaegr, kpop: @yoongismin ☆",
                    "url": "https://t.co/AXDwFwiLFI",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https://t.co/AXDwFwiLFI",
                                "expanded_url": "https://twitter.com/kotoriminamis/status/642936145945321472",
                                "display_url": "twitter.com/kotoriminamis/…",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1559,
                    "friends_count": 224,
                    "listed_count": 11,
                    "created_at": "Fri Jan 25 16:50:54 +0000 2013",
                    "favourites_count": 7561,
                    "utc_offset": -18000,
                    "time_zone": "Central Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 21043,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "FFFFFF",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/612085721269059584/CLl6SVDW.png",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/612085721269059584/CLl6SVDW.png",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/656965249493397504/PeukUp7F_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/656965249493397504/PeukUp7F_normal.png",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1119760788/1442547578",
                    "profile_link_color": "94D487",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:37:24 +0000 2015",
                    "id": 659378437258420200,
                    "id_str": "659378437258420224",
                    "text": "i was gonna try to find a pic of kotori with a cat for you and you are the first result @kotoriminamis https://t.co/RxPGvuI5yb",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 3723639073,
                        "id_str": "3723639073",
                        "name": "tatum",
                        "screen_name": "sailormoron",
                        "location": "ohio",
                        "description": "feminist. XVX. cruelty-free. ꒰⁎❛⃘ੌ ᵕ ❛⃘ੌ⁎꒱",
                        "url": "https://t.co/j8JO7Qzx36",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https://t.co/j8JO7Qzx36",
                                    "expanded_url": "http://instagram.com/cxdeorange",
                                    "display_url": "instagram.com/cxdeorange",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 163,
                        "friends_count": 93,
                        "listed_count": 0,
                        "created_at": "Tue Sep 29 07:53:30 +0000 2015",
                        "favourites_count": 723,
                        "utc_offset": null,
                        "time_zone": null,
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 508,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/658513984593797120/XaXe1G1u_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/658513984593797120/XaXe1G1u_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3723639073/1445895230",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "kotoriminamis",
                            "name": "kotori's spooky wife",
                            "id": 1119760788,
                            "id_str": "1119760788",
                            "indices": [88, 102]
                        }],
                        "urls": [],
                        "media": [{
                            "id": 659378430274744300,
                            "id_str": "659378430274744320",
                            "indices": [103, 126],
                            "media_url": "http://pbs.twimg.com/media/CSaVMFUUsAAftDJ.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSaVMFUUsAAftDJ.jpg",
                            "url": "https://t.co/RxPGvuI5yb",
                            "display_url": "pic.twitter.com/RxPGvuI5yb",
                            "expanded_url": "http://twitter.com/sailormoron/status/659378437258420224/photo/1",
                            "type": "photo",
                            "sizes": {
                                "large": {
                                    "w": 577,
                                    "h": 1024,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "small": {
                                    "w": 340,
                                    "h": 603,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "w": 577,
                                    "h": 1024,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "sailormoron",
                        "name": "tatum",
                        "id": 3723639073,
                        "id_str": "3723639073",
                        "indices": [3, 15]
                    }, {
                        "screen_name": "kotoriminamis",
                        "name": "kotori's spooky wife",
                        "id": 1119760788,
                        "id_str": "1119760788",
                        "indices": [105, 119]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 659378430274744300,
                        "id_str": "659378430274744320",
                        "indices": [120, 140],
                        "media_url": "http://pbs.twimg.com/media/CSaVMFUUsAAftDJ.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaVMFUUsAAftDJ.jpg",
                        "url": "https://t.co/RxPGvuI5yb",
                        "display_url": "pic.twitter.com/RxPGvuI5yb",
                        "expanded_url": "http://twitter.com/sailormoron/status/659378437258420224/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 577,
                                "h": 1024,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 340,
                                "h": 603,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 577,
                                "h": 1024,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659378437258420200,
                        "source_status_id_str": "659378437258420224",
                        "source_user_id": 3723639073,
                        "source_user_id_str": "3723639073"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:30 +0000 2015",
                "id": 659379469921185800,
                "id_str": "659379469921185792",
                "text": "https://t.co/HDQBn7gdEM @avinicolacat #vicatalà",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 143191318,
                    "id_str": "143191318",
                    "name": "Clara Antúnez",
                    "screen_name": "clara_antunez",
                    "location": "Empordà i Bages",
                    "description": "Sommelier i nutricionista. Apassionada del món del vi, la gastronomia i els plaers d'una bona alimentació. Coautora d'alguns llibres de vins i #enoturisme",
                    "url": "http://t.co/kWnqptUcgd",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/kWnqptUcgd",
                                "expanded_url": "http://www.claraantunez.com",
                                "display_url": "claraantunez.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1714,
                    "friends_count": 1807,
                    "listed_count": 50,
                    "created_at": "Wed May 12 21:00:08 +0000 2010",
                    "favourites_count": 3947,
                    "utc_offset": 3600,
                    "time_zone": "Paris",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 3060,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "EDECE9",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme3/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme3/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/595512922840965120/34d6_JE8_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/595512922840965120/34d6_JE8_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/143191318/1441271114",
                    "profile_link_color": "088253",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "E3E2DE",
                    "profile_text_color": "634047",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "vicatalà",
                        "indices": [38, 47]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "avinicolacat",
                        "name": "AVC",
                        "id": 192848083,
                        "id_str": "192848083",
                        "indices": [24, 37]
                    }],
                    "urls": [{
                        "url": "https://t.co/HDQBn7gdEM",
                        "expanded_url": "http://www.elsingular.cat/vadevi/notices/2015/10/cartavI_2015_ja_te_els_dotze_primers_restaurants_finalistes_7117.php",
                        "display_url": "elsingular.cat/vadevi/notices…",
                        "indices": [0, 23]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:30 +0000 2015",
                "id": 659379469493235700,
                "id_str": "659379469493235712",
                "text": "@yuyakezuki616 よっしゃ（白旗）",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": 659379096401547300,
                "in_reply_to_status_id_str": "659379096401547264",
                "in_reply_to_user_id": 2801817014,
                "in_reply_to_user_id_str": "2801817014",
                "in_reply_to_screen_name": "yuyakezuki616",
                "user": {
                    "id": 235899614,
                    "id_str": "235899614",
                    "name": "野生のコルキャ",
                    "screen_name": "Call_Cat",
                    "location": "ClockWorker-クロックワーカー-",
                    "description": "ラノベ活動をメインに、ニコ動でちまちま動画をうpしています＿´ω`)_  \n今頃ポケモンにハマりだしたり。\nアイコンはかがやんぬさんのものを使わせて頂いております",
                    "url": "http://t.co/kGKHk1CP1M",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/kGKHk1CP1M",
                                "expanded_url": "http://com.nicovideo.jp/community/co1614637",
                                "display_url": "com.nicovideo.jp/community/co16…",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 144,
                    "friends_count": 89,
                    "listed_count": 11,
                    "created_at": "Sun Jan 09 09:56:40 +0000 2011",
                    "favourites_count": 114,
                    "utc_offset": 32400,
                    "time_zone": "Tokyo",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 45837,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "0099B9",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme4/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme4/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/626423707733340160/HC1DdqVk_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/626423707733340160/HC1DdqVk_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/235899614/1385910156",
                    "profile_link_color": "0022FF",
                    "profile_sidebar_border_color": "5ED4DC",
                    "profile_sidebar_fill_color": "95E8EC",
                    "profile_text_color": "3C3940",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "yuyakezuki616",
                        "name": "夕月鋭音＠最早何クラスタか不明",
                        "id": 2801817014,
                        "id_str": "2801817014",
                        "indices": [0, 14]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:30 +0000 2015",
                "id": 659379468901810200,
                "id_str": "659379468901810176",
                "text": "@kikusui_do DMができないのですが。。。というか、問い合わせしたメールに関してはどうなったんですか？わざわざ問い合わせしたのだから、そちらのメールに返して頂きたく思います。",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": 659268640336777200,
                "in_reply_to_status_id_str": "659268640336777216",
                "in_reply_to_user_id": 492857030,
                "in_reply_to_user_id_str": "492857030",
                "in_reply_to_screen_name": "kikusui_do",
                "user": {
                    "id": 2814305108,
                    "id_str": "2814305108",
                    "name": "動物大好きネコ先輩",
                    "screen_name": "0619_cat",
                    "location": "",
                    "description": "２４歳になりました！動物が好きです。たまに自宅の動物さんの写真載せます。でも、基本的にはテキトーな事を呟いてます。",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 8,
                    "friends_count": 22,
                    "listed_count": 0,
                    "created_at": "Wed Sep 17 05:49:58 +0000 2014",
                    "favourites_count": 33,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 239,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/597281894712016896/GjyD6XAH_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/597281894712016896/GjyD6XAH_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "kikusui_do",
                        "name": "できたてポテトチップの菊水堂",
                        "id": 492857030,
                        "id_str": "492857030",
                        "indices": [0, 11]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:30 +0000 2015",
                "id": 659379468843135000,
                "id_str": "659379468843134976",
                "text": "RT @meowpic: #cat https://t.co/3L6FPrkiCv",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3648993613,
                    "id_str": "3648993613",
                    "name": "海堂薫@低浮上",
                    "screen_name": "kd_kor_girl",
                    "location": "海堂薫を舐めんじゃねぇ",
                    "description": "非公式tns也垢/永久女体化/身長156cm/猫好き/アイコン頂き物",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 35,
                    "friends_count": 30,
                    "listed_count": 1,
                    "created_at": "Tue Sep 22 13:14:48 +0000 2015",
                    "favourites_count": 211,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 817,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/646325184425668609/0zODjUez_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/646325184425668609/0zODjUez_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "und",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:14:33 +0000 2015",
                    "id": 659372684942274600,
                    "id_str": "659372684942274560",
                    "text": "#cat https://t.co/3L6FPrkiCv",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 420447649,
                        "id_str": "420447649",
                        "name": "mewo",
                        "screen_name": "meowpic",
                        "location": "",
                        "description": "cat / ねこの写真",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 940,
                        "friends_count": 1048,
                        "listed_count": 8,
                        "created_at": "Thu Nov 24 16:53:51 +0000 2011",
                        "favourites_count": 49,
                        "utc_offset": -36000,
                        "time_zone": "Hawaii",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 6471,
                        "lang": "ja",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "FFFFFF",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/647372641951596544/Hsf4rrNm_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/647372641951596544/Hsf4rrNm_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/420447649/1443178287",
                        "profile_link_color": "FFCCFF",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "FFFFFF",
                        "profile_text_color": "A6D8FF",
                        "profile_use_background_image": false,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 7,
                    "favorite_count": 24,
                    "entities": {
                        "hashtags": [{
                            "text": "cat",
                            "indices": [0, 4]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 659372680081051600,
                            "id_str": "659372680081051648",
                            "indices": [5, 28],
                            "media_url": "http://pbs.twimg.com/media/CSaP9YLUEAA1Ont.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSaP9YLUEAA1Ont.jpg",
                            "url": "https://t.co/3L6FPrkiCv",
                            "display_url": "pic.twitter.com/3L6FPrkiCv",
                            "expanded_url": "http://twitter.com/meowpic/status/659372684942274560/photo/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 340,
                                    "h": 232,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 485,
                                    "h": 333,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 485,
                                    "h": 333,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "und"
                },
                "is_quote_status": false,
                "retweet_count": 7,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "cat",
                        "indices": [13, 17]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "meowpic",
                        "name": "mewo",
                        "id": 420447649,
                        "id_str": "420447649",
                        "indices": [3, 11]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 659372680081051600,
                        "id_str": "659372680081051648",
                        "indices": [18, 41],
                        "media_url": "http://pbs.twimg.com/media/CSaP9YLUEAA1Ont.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaP9YLUEAA1Ont.jpg",
                        "url": "https://t.co/3L6FPrkiCv",
                        "display_url": "pic.twitter.com/3L6FPrkiCv",
                        "expanded_url": "http://twitter.com/meowpic/status/659372684942274560/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 232,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 485,
                                "h": 333,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 485,
                                "h": 333,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659372684942274600,
                        "source_status_id_str": "659372684942274560",
                        "source_user_id": 420447649,
                        "source_user_id_str": "420447649"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:30 +0000 2015",
                "id": 659379468083957800,
                "id_str": "659379468083957761",
                "text": "@cat_valsk \nよろしくお願いします…&gt;_&lt;…",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": 659284567048609800,
                "in_reply_to_status_id_str": "659284567048609792",
                "in_reply_to_user_id": 2943948673,
                "in_reply_to_user_id_str": "2943948673",
                "in_reply_to_screen_name": "cat_valsk",
                "user": {
                    "id": 3271811430,
                    "id_str": "3271811430",
                    "name": "はむぱい",
                    "screen_name": "mochihadacmoms",
                    "location": "",
                    "description": "チェヨン",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 15,
                    "friends_count": 18,
                    "listed_count": 0,
                    "created_at": "Wed Jul 08 12:32:22 +0000 2015",
                    "favourites_count": 40,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 472,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/659033671874146304/wC8lHS9A_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/659033671874146304/wC8lHS9A_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3271811430/1436632794",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "cat_valsk",
                        "name": "よる",
                        "id": 2943948673,
                        "id_str": "2943948673",
                        "indices": [0, 10]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:30 +0000 2015",
                "id": 659379468071407600,
                "id_str": "659379468071407617",
                "text": "理大にゃんこってとてつもなくかわいいにゃ(*´ω｀*)",
                "source": "<a href=\"http://twittbot.net/\" rel=\"nofollow\">twittbot.net</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2437270076,
                    "id_str": "2437270076",
                    "name": "とら(理大にゃんこ)",
                    "screen_name": "ous_cat_bot",
                    "location": "",
                    "description": "岡山理科大にすんでいるにゃんこにゃん♪メスだにゃん♪男性が苦手だにゃん(´・ω・`)よろしくにゃん(^^)v",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 105,
                    "friends_count": 109,
                    "listed_count": 2,
                    "created_at": "Thu Apr 10 16:52:58 +0000 2014",
                    "favourites_count": 0,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 22616,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/454304036154392576/FdjnIRUz_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/454304036154392576/FdjnIRUz_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2437270076/1397149496",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:30 +0000 2015",
                "id": 659379466645323800,
                "id_str": "659379466645323776",
                "text": "@reimu_cat そのへたれちんぽで何する気だ #出会い系 #ふるえる",
                "source": "<a href=\"https://play.google.com/store/apps/details?id=info.narazaki.android.tuboroid\" rel=\"nofollow\">Tuboroid</a>",
                "truncated": false,
                "in_reply_to_status_id": 659379193478709200,
                "in_reply_to_status_id_str": "659379193478709250",
                "in_reply_to_user_id": 2972041333,
                "in_reply_to_user_id_str": "2972041333",
                "in_reply_to_screen_name": "reimu_cat",
                "user": {
                    "id": 3305709514,
                    "id_str": "3305709514",
                    "name": "Anonymous RAg",
                    "screen_name": "anonrag",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 297,
                    "friends_count": 342,
                    "listed_count": 4,
                    "created_at": "Mon Jun 01 15:03:13 +0000 2015",
                    "favourites_count": 0,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 264010,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/620972063847657474/l36KfsfA_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/620972063847657474/l36KfsfA_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "出会い系",
                        "indices": [26, 31]
                    }, {
                        "text": "ふるえる",
                        "indices": [32, 37]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "reimu_cat",
                        "name": "hakureireimu",
                        "id": 2972041333,
                        "id_str": "2972041333",
                        "indices": [0, 10]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:30 +0000 2015",
                "id": 659379466624352300,
                "id_str": "659379466624352256",
                "text": "@reimu_cat そのへたれちんぽで何する気だ #出会い #nonukes",
                "source": "<a href=\"https://play.google.com/store/apps/details?id=info.narazaki.android.tuboroid\" rel=\"nofollow\">Tuboroid</a>",
                "truncated": false,
                "in_reply_to_status_id": 659379192648175600,
                "in_reply_to_status_id_str": "659379192648175616",
                "in_reply_to_user_id": 2972041333,
                "in_reply_to_user_id_str": "2972041333",
                "in_reply_to_screen_name": "reimu_cat",
                "user": {
                    "id": 3305709514,
                    "id_str": "3305709514",
                    "name": "Anonymous RAg",
                    "screen_name": "anonrag",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 297,
                    "friends_count": 342,
                    "listed_count": 4,
                    "created_at": "Mon Jun 01 15:03:13 +0000 2015",
                    "favourites_count": 0,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 264010,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/620972063847657474/l36KfsfA_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/620972063847657474/l36KfsfA_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "出会い",
                        "indices": [26, 30]
                    }, {
                        "text": "nonukes",
                        "indices": [31, 39]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "reimu_cat",
                        "name": "hakureireimu",
                        "id": 2972041333,
                        "id_str": "2972041333",
                        "indices": [0, 10]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:29 +0000 2015",
                "id": 659379465269702700,
                "id_str": "659379465269702658",
                "text": "RT @abe_mujib: happy birthday my ultimate oshi at akb48 my god will always gift you happiness and get all you're hops amiin #大島涼花生誕 https:/…",
                "source": "<a href=\"http://lol.ru\" rel=\"nofollow\">oasdfkopakfoskdpf</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3432208671,
                    "id_str": "3432208671",
                    "name": "Булат Хасанов",
                    "screen_name": "science__cat",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1928,
                    "friends_count": 1892,
                    "listed_count": 1430,
                    "created_at": "Thu Aug 20 01:20:01 +0000 2015",
                    "favourites_count": 9215,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 133485,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/634560283307020288/zZXKTNVp_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/634560283307020288/zZXKTNVp_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Tue Oct 20 13:15:39 +0000 2015",
                    "id": 656458759942737900,
                    "id_str": "656458759942737920",
                    "text": "happy birthday my ultimate oshi at akb48 my god will always gift you happiness and get all you're hops amiin #大島涼花生誕 https://t.co/cW8DnIC37a",
                    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 2524422751,
                        "id_str": "2524422751",
                        "name": "calon imam",
                        "screen_name": "abe_mujib",
                        "location": "garut but at bintan",
                        "description": "Dusun baru.rt 03 rw 04 kecamatan cisarua kab.sumedang",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 136,
                        "friends_count": 134,
                        "listed_count": 1,
                        "created_at": "Mon May 26 07:34:39 +0000 2014",
                        "favourites_count": 1088,
                        "utc_offset": null,
                        "time_zone": null,
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 5166,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/657002465452167168/bOauXQe0_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/657002465452167168/bOauXQe0_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2524422751/1444733427",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 7,
                    "favorite_count": 7,
                    "entities": {
                        "hashtags": [{
                            "text": "大島涼花生誕",
                            "indices": [109, 116]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 656458715055284200,
                            "id_str": "656458715055284225",
                            "indices": [117, 140],
                            "media_url": "http://pbs.twimg.com/media/CRw1uSiUYAE7jZS.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CRw1uSiUYAE7jZS.jpg",
                            "url": "https://t.co/cW8DnIC37a",
                            "display_url": "pic.twitter.com/cW8DnIC37a",
                            "expanded_url": "http://twitter.com/abe_mujib/status/656458759942737920/photo/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 340,
                                    "h": 453,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "w": 600,
                                    "h": 800,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 768,
                                    "h": 1024,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 7,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "大島涼花生誕",
                        "indices": [124, 131]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "abe_mujib",
                        "name": "calon imam",
                        "id": 2524422751,
                        "id_str": "2524422751",
                        "indices": [3, 13]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 656458715055284200,
                        "id_str": "656458715055284225",
                        "indices": [139, 140],
                        "media_url": "http://pbs.twimg.com/media/CRw1uSiUYAE7jZS.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CRw1uSiUYAE7jZS.jpg",
                        "url": "https://t.co/cW8DnIC37a",
                        "display_url": "pic.twitter.com/cW8DnIC37a",
                        "expanded_url": "http://twitter.com/abe_mujib/status/656458759942737920/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 453,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 600,
                                "h": 800,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 768,
                                "h": 1024,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 656458759942737900,
                        "source_status_id_str": "656458759942737920",
                        "source_user_id": 2524422751,
                        "source_user_id_str": "2524422751"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "in",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:29 +0000 2015",
                "id": 659379463583612900,
                "id_str": "659379463583612928",
                "text": "Skrg rambut lo dikeriting mulu, gimana caranya? Pap cat… — Ga sering juga sihh, klo emg lagi mood doang, caranya b… https://t.co/SnJNfvdYSj",
                "source": "<a href=\"http://ask.fm/\" rel=\"nofollow\">Ask.fm</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 84804045,
                    "id_str": "84804045",
                    "name": "ƉASN",
                    "screen_name": "Desi_AgustinSN",
                    "location": "http://ask.fm/desiagustin",
                    "description": "Part Of Binusian'17 MarComm-Public Relations/@BVOICERADIO/ Ig: desiagustiin",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1141,
                    "friends_count": 717,
                    "listed_count": 3,
                    "created_at": "Sat Oct 24 09:04:34 +0000 2009",
                    "favourites_count": 152,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 36894,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "FF6699",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000122338855/eda73d23f91a05cafee53c08328b920d.jpeg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000122338855/eda73d23f91a05cafee53c08328b920d.jpeg",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/568766559112286208/bpnxghVj_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/568766559112286208/bpnxghVj_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/84804045/1380191243",
                    "profile_link_color": "DD2E44",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "E5507E",
                    "profile_text_color": "362720",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/SnJNfvdYSj",
                        "expanded_url": "http://l.ask.fm/igoto/45DKECN75V62DDAUPY6IQO7H7KNDJLA5S7Q7BAN6KHV2XYNMYIYI2Z2MFZHMWRBTK6Z7WEIHJQUH4DB7YEV7M2VONS5LPBR5UUARBEY3C53DWGP5B6MTGOHPZS2PFWD7SCSMUBQC2TTHDFMILWLAES3NVXGHNYUKYTFGLYDTQOPPYP7SFZZWHX6M6NPKJ47XTQI72VY=",
                        "display_url": "l.ask.fm/igoto/45DKECN7…",
                        "indices": [116, 139]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "in"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:29 +0000 2015",
                "id": 659379463575195600,
                "id_str": "659379463575195648",
                "text": "@graciemorris_ is the cat high",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": 659378601880629200,
                "in_reply_to_status_id_str": "659378601880629248",
                "in_reply_to_user_id": 407220323,
                "in_reply_to_user_id_str": "407220323",
                "in_reply_to_screen_name": "graciemorris_",
                "user": {
                    "id": 294581479,
                    "id_str": "294581479",
                    "name": "finn",
                    "screen_name": "_FINNLAY",
                    "location": "Panem, District 12",
                    "description": "Chances are, I want to get my hands on your mammary glands. #BlackpoolFC #UTMP #OystonOut",
                    "url": "http://t.co/67hL3GKvon",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/67hL3GKvon",
                                "expanded_url": "http://existencedoesntmatter.tumblr.com/",
                                "display_url": "existencedoesntmatter.tumblr.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 726,
                    "friends_count": 625,
                    "listed_count": 5,
                    "created_at": "Sat May 07 12:06:16 +0000 2011",
                    "favourites_count": 3004,
                    "utc_offset": 0,
                    "time_zone": "London",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 23113,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "DBE9ED",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000113028928/0869371c234371d4a3d8335649057711.jpeg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000113028928/0869371c234371d4a3d8335649057711.jpeg",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/636209744592699392/uujBWr2D_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/636209744592699392/uujBWr2D_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/294581479/1433492293",
                    "profile_link_color": "009999",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "E6F6F9",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "graciemorris_",
                        "name": "gracie",
                        "id": 407220323,
                        "id_str": "407220323",
                        "indices": [0, 14]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:29 +0000 2015",
                "id": 659379462308515800,
                "id_str": "659379462308515840",
                "text": "https://t.co/bVG1cu1Tg9",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 133599757,
                    "id_str": "133599757",
                    "name": "El Tocne",
                    "screen_name": "Turner_Cat",
                    "location": "Jólibu, Atlántico.",
                    "description": "Fanático de los Arctic Monkeys y del Sayayín. No hay boli.",
                    "url": "http://t.co/aIe8r0czpj",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/aIe8r0czpj",
                                "expanded_url": "http://www.youtube.com/vierneszombie",
                                "display_url": "youtube.com/vierneszombie",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1388,
                    "friends_count": 813,
                    "listed_count": 10,
                    "created_at": "Fri Apr 16 05:32:28 +0000 2010",
                    "favourites_count": 645,
                    "utc_offset": -18000,
                    "time_zone": "Bogota",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 9595,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "DBE9ED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme17/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme17/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/531209705301868544/erKAiXiW_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/531209705301868544/erKAiXiW_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/133599757/1414953091",
                    "profile_link_color": "CC3366",
                    "profile_sidebar_border_color": "DBE9ED",
                    "profile_sidebar_fill_color": "E6F6F9",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [],
                    "media": [{
                        "id": 659379461406761000,
                        "id_str": "659379461406760960",
                        "indices": [0, 23],
                        "media_url": "http://pbs.twimg.com/media/CSaWIGlWoAA_Tpi.png",
                        "media_url_https": "https://pbs.twimg.com/media/CSaWIGlWoAA_Tpi.png",
                        "url": "https://t.co/bVG1cu1Tg9",
                        "display_url": "pic.twitter.com/bVG1cu1Tg9",
                        "expanded_url": "http://twitter.com/Turner_Cat/status/659379462308515840/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 491,
                                "h": 129,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 491,
                                "h": 129,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 129,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 340,
                                "h": 89,
                                "resize": "fit"
                            }
                        }
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:28 +0000 2015",
                "id": 659379460542562300,
                "id_str": "659379460542562304",
                "text": "【マイリスト】【東方自作アレンジ】月夜のツィーヌハフタータンズ https://t.co/Wkp1wnqVg8 #sm27468041",
                "source": "<a href=\"http://www.nicovideo.jp/\" rel=\"nofollow\">niconico ニコレポ連携</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2263078273,
                    "id_str": "2263078273",
                    "name": "猫の弾丸(tama) ついミュート中",
                    "screen_name": "cat_88caliber",
                    "location": "ノースティリス ヴェルニース近郊/オルドラン",
                    "description": "軍事ゲームやフリーゲーム『ELONA』を好んでプレーしてます。 ElonaPlusでのPCの成長日記中心にいろいろ書いています(3部打ち止め中、今はomake overhaul/MMA)。",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 335,
                    "friends_count": 824,
                    "listed_count": 3,
                    "created_at": "Thu Dec 26 16:53:43 +0000 2013",
                    "favourites_count": 2390,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 1576,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/562933933785243649/W9ibSapq_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/562933933785243649/W9ibSapq_normal.png",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2263078273/1416010683",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "sm27468041",
                        "indices": [56, 67]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/Wkp1wnqVg8",
                        "expanded_url": "http://nico.ms/sm27468041",
                        "display_url": "nico.ms/sm27468041",
                        "indices": [32, 55]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:28 +0000 2015",
                "id": 659379460324528100,
                "id_str": "659379460324528128",
                "text": "19N Mataró Jornada Marc legal per a la gestió de menjadors escolars amb criteris escològics i de proximitat https://t.co/Pos8RcilU3",
                "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Mobile Web (M5)</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 327355244,
                    "id_str": "327355244",
                    "name": "FaPaC ",
                    "screen_name": "FaPaCcat",
                    "location": "Catalunya",
                    "description": "Federació que aplega a 2160 AMPA de Catalunya amb l'objectiu de millorar la qualitat de l'educació pública #AMPA #xarxaclau https://t.co/2HOG7A1HP1",
                    "url": "http://t.co/1xnJ3pC1ZX",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/1xnJ3pC1ZX",
                                "expanded_url": "http://www.fapac.cat",
                                "display_url": "fapac.cat",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "https://t.co/2HOG7A1HP1",
                                "expanded_url": "https://www.facebook.com/fapac.cat",
                                "display_url": "facebook.com/fapac.cat",
                                "indices": [124, 147]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 6963,
                    "friends_count": 2795,
                    "listed_count": 224,
                    "created_at": "Fri Jul 01 12:39:29 +0000 2011",
                    "favourites_count": 222,
                    "utc_offset": -10800,
                    "time_zone": "Greenland",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 10139,
                    "lang": "ca",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "B01A1A",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/340974156/collage_4.JPG",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/340974156/collage_4.JPG",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/433580008733278208/VefroNef_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/433580008733278208/VefroNef_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/327355244/1435569451",
                    "profile_link_color": "8F1414",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "F5E29F",
                    "profile_text_color": "030303",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/Pos8RcilU3",
                        "expanded_url": "http://www.menjadorsecologics.cat/actualitat/jornada-marc-legal-per-gestionar-els-menjadors-escolars-amb-criteris-ecologics-saludables-i-de-proximitat/#more-803",
                        "display_url": "menjadorsecologics.cat/actualitat/jor…",
                        "indices": [108, 131]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:28 +0000 2015",
                "id": 659379459431116800,
                "id_str": "659379459431116801",
                "text": "RT @SyakirahNasri: I think my cat is secretly a human... https://t.co/3Q5CYAMK0z",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 1251029766,
                    "id_str": "1251029766",
                    "name": "nadwani",
                    "screen_name": "hazwaniinadirah",
                    "location": "",
                    "description": "Ig: hazwanihidratninatersenget",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 556,
                    "friends_count": 378,
                    "listed_count": 0,
                    "created_at": "Fri Mar 08 07:34:23 +0000 2013",
                    "favourites_count": 3900,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 13642,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/647423213983535104/H8B0KQiR_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/647423213983535104/H8B0KQiR_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1251029766/1431851632",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 05:02:55 +0000 2015",
                    "id": 659233860685725700,
                    "id_str": "659233860685725696",
                    "text": "I think my cat is secretly a human... https://t.co/3Q5CYAMK0z",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 412793445,
                        "id_str": "412793445",
                        "name": "✩ ✩ ✩",
                        "screen_name": "SyakirahNasri",
                        "location": "SP",
                        "description": "football insta: @qohfc | SP | camp instructor",
                        "url": "https://t.co/cKTlJhdYsN",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https://t.co/cKTlJhdYsN",
                                    "expanded_url": "http://vine.co/syakirahnasri",
                                    "display_url": "vine.co/syakirahnasri",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 11212,
                        "friends_count": 6077,
                        "listed_count": 10,
                        "created_at": "Tue Nov 15 04:08:49 +0000 2011",
                        "favourites_count": 41012,
                        "utc_offset": 28800,
                        "time_zone": "Singapore",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 110403,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "131516",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/520177431651434497/b-f2J8On.jpeg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/520177431651434497/b-f2J8On.jpeg",
                        "profile_background_tile": true,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/658889746454724609/hg_xHo4W_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/658889746454724609/hg_xHo4W_normal.jpg",
                        "profile_link_color": "ED1DA4",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "000000",
                        "profile_text_color": "19A7E8",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 613,
                    "favorite_count": 270,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 659233824308490200,
                            "id_str": "659233824308490240",
                            "indices": [38, 61],
                            "media_url": "http://pbs.twimg.com/media/CSYRq6HUcAAxw13.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSYRq6HUcAAxw13.jpg",
                            "url": "https://t.co/3Q5CYAMK0z",
                            "display_url": "pic.twitter.com/3Q5CYAMK0z",
                            "expanded_url": "http://twitter.com/SyakirahNasri/status/659233860685725696/photo/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 340,
                                    "h": 453,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 767,
                                    "h": 1024,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 600,
                                    "h": 801,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 613,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "SyakirahNasri",
                        "name": "✩ ✩ ✩",
                        "id": 412793445,
                        "id_str": "412793445",
                        "indices": [3, 17]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 659233824308490200,
                        "id_str": "659233824308490240",
                        "indices": [57, 80],
                        "media_url": "http://pbs.twimg.com/media/CSYRq6HUcAAxw13.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSYRq6HUcAAxw13.jpg",
                        "url": "https://t.co/3Q5CYAMK0z",
                        "display_url": "pic.twitter.com/3Q5CYAMK0z",
                        "expanded_url": "http://twitter.com/SyakirahNasri/status/659233860685725696/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 453,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 767,
                                "h": 1024,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 600,
                                "h": 801,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659233860685725700,
                        "source_status_id_str": "659233860685725696",
                        "source_user_id": 412793445,
                        "source_user_id_str": "412793445"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:28 +0000 2015",
                "id": 659379458718220300,
                "id_str": "659379458718220289",
                "text": "RT @Ladyofhadess: It's like this, if someone sews a cat head onto my decapitated head I'm not a dead fucking cat.",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 1516582980,
                    "id_str": "1516582980",
                    "name": "Actual Dykes",
                    "screen_name": "ActualDykez",
                    "location": "Everywhere",
                    "description": "We are Actual Dykes who wish to march in Dyke Marches with other Actual Dykes. Respect the V.\n\nhttps://t.co/ADnqOAN0vv",
                    "url": "https://t.co/iZdgb9CS8p",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https://t.co/iZdgb9CS8p",
                                "expanded_url": "http://ask.fm/ActualDykez",
                                "display_url": "ask.fm/ActualDykez",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "https://t.co/ADnqOAN0vv",
                                "expanded_url": "http://actualdykez.wordpress.com",
                                "display_url": "actualdykez.wordpress.com",
                                "indices": [95, 118]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 450,
                    "friends_count": 317,
                    "listed_count": 6,
                    "created_at": "Fri Jun 14 14:29:17 +0000 2013",
                    "favourites_count": 596,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 3738,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000108901674/7e7bd0ee80a4a98727c938b8efcc53eb.jpeg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000108901674/7e7bd0ee80a4a98727c938b8efcc53eb.jpeg",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/618829069539520512/rW4yPTvK_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/618829069539520512/rW4yPTvK_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1516582980/1436842307",
                    "profile_link_color": "8F00B3",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 13:42:46 +0000 2015",
                    "id": 659364688778653700,
                    "id_str": "659364688778653696",
                    "text": "It's like this, if someone sews a cat head onto my decapitated head I'm not a dead fucking cat.",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 74696424,
                        "id_str": "74696424",
                        "name": "Coco Puff",
                        "screen_name": "Ladyofhadess",
                        "location": "Reality",
                        "description": "Foul mouthed Free Speech advocate & Anti theist who's often mistaken for a Japanese sex doll or a bloke called Dave. Libertarian. With long suffering @pakehtho",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 2553,
                        "friends_count": 262,
                        "listed_count": 104,
                        "created_at": "Wed Sep 16 10:01:42 +0000 2009",
                        "favourites_count": 44428,
                        "utc_offset": 0,
                        "time_zone": "London",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 79590,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "1A1B1F",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme9/bg.gif",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme9/bg.gif",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/648999709860868096/4nvg_UdU_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/648999709860868096/4nvg_UdU_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/74696424/1445797725",
                        "profile_link_color": "2FC2EF",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "252429",
                        "profile_text_color": "666666",
                        "profile_use_background_image": false,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 2,
                    "favorite_count": 4,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": []
                    },
                    "favorited": false,
                    "retweeted": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 2,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "Ladyofhadess",
                        "name": "Coco Puff",
                        "id": 74696424,
                        "id_str": "74696424",
                        "indices": [3, 16]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:28 +0000 2015",
                "id": 659379458533490700,
                "id_str": "659379458533490689",
                "text": "@pichon_cat 一応30%は貴重なのでキープですね！ 確かに魔導師のsp回収速度上がったのでまだ使えそうですね(*^_^*)",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": 659377546585182200,
                "in_reply_to_status_id_str": "659377546585182208",
                "in_reply_to_user_id": 3309145020,
                "in_reply_to_user_id_str": "3309145020",
                "in_reply_to_screen_name": "pichon_cat",
                "user": {
                    "id": 2912688415,
                    "id_str": "2912688415",
                    "name": "キャトラハイム@白猫垢",
                    "screen_name": "seijikuroneko",
                    "location": "",
                    "description": "白猫プロジェクト、乖離性、Fate/go＋その他でやっている趣味用の垢です。PSはまだまだ低いです。(ｰ ｰ;)白猫関係は100%フォロバしますので気軽にフォローしてみてください。無言フォロー失礼します！",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 357,
                    "friends_count": 713,
                    "listed_count": 4,
                    "created_at": "Fri Nov 28 11:15:28 +0000 2014",
                    "favourites_count": 2427,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 7844,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/654791242031591425/31VG0EM6_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/654791242031591425/31VG0EM6_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2912688415/1439310290",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "pichon_cat",
                        "name": "ぴちょん",
                        "id": 3309145020,
                        "id_str": "3309145020",
                        "indices": [0, 11]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:27 +0000 2015",
                "id": 659379454217617400,
                "id_str": "659379454217617408",
                "text": "@ml_ruru @tunberuku @victor_9326 @nelf_cat ただいもす！｡･*･:≡(　ε:)(:з　)≡･*･｡",
                "source": "<a href=\"http://twipple.jp/\" rel=\"nofollow\">ついっぷる　</a>",
                "truncated": false,
                "in_reply_to_status_id": 659378754355986400,
                "in_reply_to_status_id_str": "659378754355986432",
                "in_reply_to_user_id": 2437654183,
                "in_reply_to_user_id_str": "2437654183",
                "in_reply_to_screen_name": "ml_ruru",
                "user": {
                    "id": 2171984173,
                    "id_str": "2171984173",
                    "name": "こなろふ",
                    "screen_name": "konarofu",
                    "location": "サイレントヒル",
                    "description": "お絵描き大好きマンです！(:3っ)っ -=三\nエロ絵が多いので注意です！pixiv:http://t.co/uKfzUVEBAG ニジエ:http://t.co/nmqItm4X4C",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": [{
                                "url": "http://t.co/uKfzUVEBAG",
                                "expanded_url": "http://www.pixiv.net/member.php?id=8559995",
                                "display_url": "pixiv.net/member.php?id=…",
                                "indices": [42, 64]
                            }, {
                                "url": "http://t.co/nmqItm4X4C",
                                "expanded_url": "http://nijie.info/members.php?id=134816",
                                "display_url": "nijie.info/members.php?id…",
                                "indices": [69, 91]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 3044,
                    "friends_count": 491,
                    "listed_count": 82,
                    "created_at": "Sun Nov 03 10:58:41 +0000 2013",
                    "favourites_count": 996,
                    "utc_offset": 32400,
                    "time_zone": "Tokyo",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 23557,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/641241856072810496/648K_4pp_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/641241856072810496/648K_4pp_normal.png",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2171984173/1411558438",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "ml_ruru",
                        "name": "ruru",
                        "id": 2437654183,
                        "id_str": "2437654183",
                        "indices": [0, 8]
                    }, {
                        "screen_name": "tunberuku",
                        "name": "だれく",
                        "id": 336995385,
                        "id_str": "336995385",
                        "indices": [9, 19]
                    }, {
                        "screen_name": "victor_9326",
                        "name": "きまぐれビクタニャス",
                        "id": 364728335,
                        "id_str": "364728335",
                        "indices": [20, 32]
                    }, {
                        "screen_name": "nelf_cat",
                        "name": "黒猫＠眠い",
                        "id": 2879610120,
                        "id_str": "2879610120",
                        "indices": [33, 42]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:26 +0000 2015",
                "id": 659379453152370700,
                "id_str": "659379453152370688",
                "text": "RT @elpaiscat: El jutge envia a la presó 5 agents de Palma per \"xantatge, coacció, intimidació i ús injust i arbitrari del poder\" https://t…",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 225523231,
                    "id_str": "225523231",
                    "name": "CusCus astorat",
                    "screen_name": "CusCusBcn",
                    "location": "Aeroport",
                    "description": "llegiu el TL i em coneixereu",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 905,
                    "friends_count": 774,
                    "listed_count": 32,
                    "created_at": "Sat Dec 11 19:48:59 +0000 2010",
                    "favourites_count": 17329,
                    "utc_offset": 3600,
                    "time_zone": "Madrid",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 57427,
                    "lang": "ca",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/1275541909/crit_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1275541909/crit_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "und",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:40:09 +0000 2015",
                    "id": 659379127041044500,
                    "id_str": "659379127041044480",
                    "text": "El jutge envia a la presó 5 agents de Palma per \"xantatge, coacció, intimidació i ús injust i arbitrari del poder\" https://t.co/7fPNaMLhYz",
                    "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 2794243443,
                        "id_str": "2794243443",
                        "name": "El País Cat",
                        "screen_name": "elpaiscat",
                        "location": "",
                        "description": "Diari global, digital, i en català",
                        "url": "http://t.co/kbwTugcyme",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/kbwTugcyme",
                                    "expanded_url": "http://cat.elpais.com",
                                    "display_url": "cat.elpais.com",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 11168,
                        "friends_count": 447,
                        "listed_count": 263,
                        "created_at": "Tue Sep 30 10:56:32 +0000 2014",
                        "favourites_count": 126,
                        "utc_offset": 3600,
                        "time_zone": "Madrid",
                        "geo_enabled": true,
                        "verified": true,
                        "statuses_count": 17220,
                        "lang": "ca",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/517125176085848064/N7K0WbZC_normal.jpeg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/517125176085848064/N7K0WbZC_normal.jpeg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2794243443/1412127233",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https://t.co/7fPNaMLhYz",
                            "expanded_url": "http://ow.ly/TWYgZ",
                            "display_url": "ow.ly/TWYgZ",
                            "indices": [115, 138]
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "und"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "elpaiscat",
                        "name": "El País Cat",
                        "id": 2794243443,
                        "id_str": "2794243443",
                        "indices": [3, 13]
                    }],
                    "urls": [{
                        "url": "https://t.co/7fPNaMLhYz",
                        "expanded_url": "http://ow.ly/TWYgZ",
                        "display_url": "ow.ly/TWYgZ",
                        "indices": [139, 140]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:26 +0000 2015",
                "id": 659379450065342500,
                "id_str": "659379450065342464",
                "text": "RT @rainnwilson: I'm pretty sure someone somewhere has already named a cat \"Stevens\"  :-(",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2150571709,
                    "id_str": "2150571709",
                    "name": "EverybodyLovesLarry",
                    "screen_name": "Laurence_colema",
                    "location": "Dublin, Ireland ",
                    "description": "“Hey you, that’s no way out ,You can’t find help in a bottle or a cut,” This won’t bring friends and flowers to your grave”",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 67,
                    "friends_count": 273,
                    "listed_count": 5,
                    "created_at": "Wed Oct 23 08:47:21 +0000 2013",
                    "favourites_count": 258,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 519,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/658610777214046208/_6dbA_-h_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/658610777214046208/_6dbA_-h_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2150571709/1445801650",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:40:26 +0000 2015",
                    "id": 659379199711576000,
                    "id_str": "659379199711576064",
                    "text": "I'm pretty sure someone somewhere has already named a cat \"Stevens\"  :-(",
                    "source": "<a href=\"http://www.echofon.com/\" rel=\"nofollow\">Echofon</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 19637934,
                        "id_str": "19637934",
                        "name": "RainnWilson",
                        "screen_name": "rainnwilson",
                        "location": "Los Angeles-ish",
                        "description": "I am an actor and a writer and I co-created @SoulPancake and my son, Walter.",
                        "url": "https://t.co/RDGIyYG85S",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https://t.co/RDGIyYG85S",
                                    "expanded_url": "http://ow.ly/TLtJS",
                                    "display_url": "ow.ly/TLtJS",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 4229901,
                        "friends_count": 480,
                        "listed_count": 37354,
                        "created_at": "Wed Jan 28 05:28:45 +0000 2009",
                        "favourites_count": 1999,
                        "utc_offset": -21600,
                        "time_zone": "Saskatchewan",
                        "geo_enabled": false,
                        "verified": true,
                        "statuses_count": 16422,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": true,
                        "profile_background_color": "FFFFFF",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/662221685/t8xut8tfcyzlsnfu1kxh.jpeg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/662221685/t8xut8tfcyzlsnfu1kxh.jpeg",
                        "profile_background_tile": true,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/620285166255104001/51jLBzfl_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/620285166255104001/51jLBzfl_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/19637934/1395640510",
                        "profile_link_color": "9FA1A3",
                        "profile_sidebar_border_color": "22262B",
                        "profile_sidebar_fill_color": "17161A",
                        "profile_text_color": "585F65",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 12,
                    "favorite_count": 39,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": []
                    },
                    "favorited": false,
                    "retweeted": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 12,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "rainnwilson",
                        "name": "RainnWilson",
                        "id": 19637934,
                        "id_str": "19637934",
                        "indices": [3, 15]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "et",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:26 +0000 2015",
                "id": 659379449994027000,
                "id_str": "659379449994027008",
                "text": "RT @Manza22xT: @reina_danzante @CANDELA22xT @Solciito_Cat Maas Valeee Hermanaaa 😉❤",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2233397461,
                    "id_str": "2233397461",
                    "name": "#1FinalPendienTe",
                    "screen_name": "CANDELA22xT",
                    "location": "",
                    "description": "Enferma de amor por ✰TALLERES✰ //  Fanatica del FÚTBOL⚽ // Algun dia muy lejano voy a ser periodista deportiva!!!!!",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 666,
                    "friends_count": 907,
                    "listed_count": 0,
                    "created_at": "Fri Dec 06 18:51:30 +0000 2013",
                    "favourites_count": 5646,
                    "utc_offset": -7200,
                    "time_zone": "Brasilia",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 20448,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "1A1B1F",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/605537599256707072/qFLk4xOX.jpg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/605537599256707072/qFLk4xOX.jpg",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/648690589836406784/cvEBxymB_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/648690589836406784/cvEBxymB_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2233397461/1444616681",
                    "profile_link_color": "9266CC",
                    "profile_sidebar_border_color": "181A1E",
                    "profile_sidebar_fill_color": "252429",
                    "profile_text_color": "666666",
                    "profile_use_background_image": false,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "et",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 12:58:38 +0000 2015",
                    "id": 659353582454612000,
                    "id_str": "659353582454611968",
                    "text": "@reina_danzante @CANDELA22xT @Solciito_Cat Maas Valeee Hermanaaa 😉❤",
                    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                    "truncated": false,
                    "in_reply_to_status_id": 659352504283570200,
                    "in_reply_to_status_id_str": "659352504283570176",
                    "in_reply_to_user_id": 2839579284,
                    "in_reply_to_user_id_str": "2839579284",
                    "in_reply_to_screen_name": "reina_danzante",
                    "user": {
                        "id": 3198769418,
                        "id_str": "3198769418",
                        "name": "Manzaaa ",
                        "screen_name": "Manza22xT",
                        "location": "",
                        "description": "",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 105,
                        "friends_count": 246,
                        "listed_count": 0,
                        "created_at": "Sun May 17 06:26:33 +0000 2015",
                        "favourites_count": 370,
                        "utc_offset": -25200,
                        "time_zone": "Pacific Time (US & Canada)",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 532,
                        "lang": "es",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "131516",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/617109615470342144/vzqy0ytX.jpg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/617109615470342144/vzqy0ytX.jpg",
                        "profile_background_tile": true,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/599978030640005120/Wv2XtVmh_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/599978030640005120/Wv2XtVmh_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3198769418/1432762925",
                        "profile_link_color": "3B94D9",
                        "profile_sidebar_border_color": "000000",
                        "profile_sidebar_fill_color": "000000",
                        "profile_text_color": "000000",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 1,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "reina_danzante",
                            "name": "Cami ♣",
                            "id": 2839579284,
                            "id_str": "2839579284",
                            "indices": [0, 15]
                        }, {
                            "screen_name": "CANDELA22xT",
                            "name": "#1FinalPendienTe",
                            "id": 2233397461,
                            "id_str": "2233397461",
                            "indices": [16, 28]
                        }, {
                            "screen_name": "Solciito_Cat",
                            "name": "Solcito",
                            "id": 2830802305,
                            "id_str": "2830802305",
                            "indices": [29, 42]
                        }],
                        "urls": []
                    },
                    "favorited": false,
                    "retweeted": false,
                    "lang": "et"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "Manza22xT",
                        "name": "Manzaaa ",
                        "id": 3198769418,
                        "id_str": "3198769418",
                        "indices": [3, 13]
                    }, {
                        "screen_name": "reina_danzante",
                        "name": "Cami ♣",
                        "id": 2839579284,
                        "id_str": "2839579284",
                        "indices": [15, 30]
                    }, {
                        "screen_name": "CANDELA22xT",
                        "name": "#1FinalPendienTe",
                        "id": 2233397461,
                        "id_str": "2233397461",
                        "indices": [31, 43]
                    }, {
                        "screen_name": "Solciito_Cat",
                        "name": "Solcito",
                        "id": 2830802305,
                        "id_str": "2830802305",
                        "indices": [44, 57]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "et"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:25 +0000 2015",
                "id": 659379448865665000,
                "id_str": "659379448865665026",
                "text": "RT @aaaaach47: 11/2(月)\nFEST VAINQUEUR\n［555] -five- 大阪BIG CAT \n SS680番台のチケット1枚を500円でお譲り致します。\nGLORIA、シャンバラ、ペルソナ傷女の音源の内一枚お付けいたしますのでお気軽にリプください。…",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2474013740,
                    "id_str": "2474013740",
                    "name": "muu",
                    "screen_name": "muu_ring",
                    "location": "",
                    "description": "取引用アカウント",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 35,
                    "friends_count": 46,
                    "listed_count": 0,
                    "created_at": "Fri May 02 13:18:06 +0000 2014",
                    "favourites_count": 6,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 538,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/462222708550299648/duAav7fi_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/462222708550299648/duAav7fi_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2474013740/1399037394",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "ja",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 04:38:55 +0000 2015",
                    "id": 659227820992823300,
                    "id_str": "659227820992823297",
                    "text": "11/2(月)\nFEST VAINQUEUR\n［555] -five- 大阪BIG CAT \n SS680番台のチケット1枚を500円でお譲り致します。\nGLORIA、シャンバラ、ペルソナ傷女の音源の内一枚お付けいたしますのでお気軽にリプください。当日手渡しでお願い致します。",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 2734685796,
                        "id_str": "2734685796",
                        "name": "取引垢",
                        "screen_name": "aaaaach47",
                        "location": "",
                        "description": "取引アカウントです。 不安でしたら本垢もありますのでそちらで取引も可能です。ゆうちょ振込可能な方でお願いします。",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 71,
                        "friends_count": 65,
                        "listed_count": 0,
                        "created_at": "Fri Aug 15 15:26:01 +0000 2014",
                        "favourites_count": 0,
                        "utc_offset": null,
                        "time_zone": null,
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 29,
                        "lang": "ja",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/500314435932545024/A27HNW-E_normal.jpeg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/500314435932545024/A27HNW-E_normal.jpeg",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 21,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": []
                    },
                    "favorited": false,
                    "retweeted": false,
                    "lang": "ja"
                },
                "is_quote_status": false,
                "retweet_count": 21,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "aaaaach47",
                        "name": "取引垢",
                        "id": 2734685796,
                        "id_str": "2734685796",
                        "indices": [3, 13]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "es",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:25 +0000 2015",
                "id": 659379447699779600,
                "id_str": "659379447699779584",
                "text": "tem bichíneo novo no ap &lt;3\n\n#meow #cat #cute #ohn #blackcat #instapet https://t.co/HhRRMBJfpf",
                "source": "<a href=\"http://instagram.com\" rel=\"nofollow\">Instagram</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 16984126,
                    "id_str": "16984126",
                    "name": "bru motta",
                    "screen_name": "brumotta",
                    "location": "São Paulo/SP - Brasil",
                    "description": ":)",
                    "url": "http://t.co/igDGuUn9MT",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/igDGuUn9MT",
                                "expanded_url": "http://www.era1x.com",
                                "display_url": "era1x.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 226,
                    "friends_count": 71,
                    "listed_count": 11,
                    "created_at": "Sun Oct 26 19:02:53 +0000 2008",
                    "favourites_count": 1,
                    "utc_offset": -7200,
                    "time_zone": "Brasilia",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 2062,
                    "lang": "pt",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "FFBFF8",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000001376112/3148ce1502212d83b3140e88b4d72f53.png",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000001376112/3148ce1502212d83b3140e88b4d72f53.png",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/520974017050587136/Lsq0z1Al_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/520974017050587136/Lsq0z1Al_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/16984126/1371514888",
                    "profile_link_color": "573F21",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "FFFFFF",
                    "profile_text_color": "FF0033",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "meow",
                        "indices": [31, 36]
                    }, {
                        "text": "cat",
                        "indices": [37, 41]
                    }, {
                        "text": "cute",
                        "indices": [42, 47]
                    }, {
                        "text": "ohn",
                        "indices": [48, 52]
                    }, {
                        "text": "blackcat",
                        "indices": [53, 62]
                    }, {
                        "text": "instapet",
                        "indices": [63, 72]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/HhRRMBJfpf",
                        "expanded_url": "https://instagram.com/p/9Yo67Dm2B2/",
                        "display_url": "instagram.com/p/9Yo67Dm2B2/",
                        "indices": [73, 96]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "es"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:25 +0000 2015",
                "id": 659379446147760100,
                "id_str": "659379446147760128",
                "text": "RT @Crashingtv: Scumbag cat. https://t.co/1Lt7uwRLx2",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 46161464,
                    "id_str": "46161464",
                    "name": "Tak Saruwatari",
                    "screen_name": "TakSaruwatari",
                    "location": "Calgary, Alberta",
                    "description": "Electrical geek, puck head, arm chair GM",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 58,
                    "friends_count": 109,
                    "listed_count": 4,
                    "created_at": "Wed Jun 10 17:01:42 +0000 2009",
                    "favourites_count": 138,
                    "utc_offset": -21600,
                    "time_zone": "Mountain Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 1598,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "1A1B1F",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme9/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme9/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/607744267/10002_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/607744267/10002_normal.png",
                    "profile_link_color": "2FC2EF",
                    "profile_sidebar_border_color": "181A1E",
                    "profile_sidebar_fill_color": "252429",
                    "profile_text_color": "666666",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 11:40:18 +0000 2015",
                    "id": 659333867690664000,
                    "id_str": "659333867690663936",
                    "text": "Scumbag cat. https://t.co/1Lt7uwRLx2",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 3094874199,
                        "id_str": "3094874199",
                        "name": "Car Crash TV",
                        "screen_name": "Crashingtv",
                        "location": "",
                        "description": "The most insane crashes, near misses, dash cam, CCTV, Go pros. We do not own any content just a fan and will remove content at copyright holders request.",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 25343,
                        "friends_count": 1071,
                        "listed_count": 172,
                        "created_at": "Wed Mar 18 16:39:07 +0000 2015",
                        "favourites_count": 95,
                        "utc_offset": null,
                        "time_zone": null,
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 3435,
                        "lang": "en-gb",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/578235941279662080/DseCdhho_normal.jpeg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/578235941279662080/DseCdhho_normal.jpeg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3094874199/1427742316",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 80,
                    "favorite_count": 76,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https://t.co/1Lt7uwRLx2",
                            "expanded_url": "http://twitter.com/Crashingtv/status/659333867690663936/photo/1",
                            "display_url": "pic.twitter.com/1Lt7uwRLx2",
                            "indices": [13, 36]
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 80,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "Crashingtv",
                        "name": "Car Crash TV",
                        "id": 3094874199,
                        "id_str": "3094874199",
                        "indices": [3, 14]
                    }],
                    "urls": [{
                        "url": "https://t.co/1Lt7uwRLx2",
                        "expanded_url": "http://twitter.com/Crashingtv/status/659333867690663936/photo/1",
                        "display_url": "pic.twitter.com/1Lt7uwRLx2",
                        "indices": [29, 52]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:25 +0000 2015",
                "id": 659379445032202200,
                "id_str": "659379445032202240",
                "text": "RT @NacioLaGarrotxa: OPINIÓ: Xevi Bayona parla del festival @lluernia a «El senglar de la llum» https://t.co/eiEomMn09g #Garrotxa https://t…",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 48389323,
                    "id_str": "48389323",
                    "name": "Pep Fargas",
                    "screen_name": "pfargas",
                    "location": "",
                    "description": "Gestor cultural, xarxes i noves eines per a la cultura.",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 887,
                    "friends_count": 1211,
                    "listed_count": 23,
                    "created_at": "Thu Jun 18 15:47:16 +0000 2009",
                    "favourites_count": 69,
                    "utc_offset": 3600,
                    "time_zone": "Amsterdam",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 1258,
                    "lang": "ca",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "FFF04D",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme19/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme19/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/602888710162653186/Q6QtpoxT_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/602888710162653186/Q6QtpoxT_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/48389323/1402695200",
                    "profile_link_color": "0099CC",
                    "profile_sidebar_border_color": "FFF8AD",
                    "profile_sidebar_fill_color": "F6FFD1",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "und",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:34:15 +0000 2015",
                    "id": 659377644358774800,
                    "id_str": "659377644358774785",
                    "text": "OPINIÓ: Xevi Bayona parla del festival @lluernia a «El senglar de la llum» https://t.co/eiEomMn09g #Garrotxa https://t.co/69d7Nae4Iu",
                    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 356948111,
                        "id_str": "356948111",
                        "name": "NacioLaGarrotxa.cat",
                        "screen_name": "NacioLaGarrotxa",
                        "location": "",
                        "description": "El diari digital de la Garrotxa",
                        "url": "http://t.co/t6gov01K",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/t6gov01K",
                                    "expanded_url": "http://www.naciolagarrotxa.cat/",
                                    "display_url": "naciolagarrotxa.cat",
                                    "indices": [0, 20]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 1578,
                        "friends_count": 331,
                        "listed_count": 21,
                        "created_at": "Wed Aug 17 16:20:17 +0000 2011",
                        "favourites_count": 148,
                        "utc_offset": 3600,
                        "time_zone": "Madrid",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 10483,
                        "lang": "ca",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "FFFFFF",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/441580830293364737/JOPd4RDJ.jpeg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/441580830293364737/JOPd4RDJ.jpeg",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/3107708686/a755e6f66b68e7801ed2bbd5e83fce4b_normal.jpeg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/3107708686/a755e6f66b68e7801ed2bbd5e83fce4b_normal.jpeg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/356948111/1411141310",
                        "profile_link_color": "E0385D",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 2,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [{
                            "text": "Garrotxa",
                            "indices": [99, 108]
                        }],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "lluernia",
                            "name": "lluernia",
                            "id": 882028088,
                            "id_str": "882028088",
                            "indices": [39, 48]
                        }],
                        "urls": [{
                            "url": "https://t.co/eiEomMn09g",
                            "expanded_url": "http://ow.ly/TWXol",
                            "display_url": "ow.ly/TWXol",
                            "indices": [75, 98]
                        }],
                        "media": [{
                            "id": 659377643003990000,
                            "id_str": "659377643003990018",
                            "indices": [109, 132],
                            "media_url": "http://pbs.twimg.com/media/CSaUeQgWUAIJAK3.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSaUeQgWUAIJAK3.jpg",
                            "url": "https://t.co/69d7Nae4Iu",
                            "display_url": "pic.twitter.com/69d7Nae4Iu",
                            "expanded_url": "http://twitter.com/NacioLaGarrotxa/status/659377644358774785/photo/1",
                            "type": "photo",
                            "sizes": {
                                "medium": {
                                    "w": 600,
                                    "h": 313,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "small": {
                                    "w": 340,
                                    "h": 177,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 989,
                                    "h": 518,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "und"
                },
                "is_quote_status": false,
                "retweet_count": 2,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "Garrotxa",
                        "indices": [120, 129]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "NacioLaGarrotxa",
                        "name": "NacioLaGarrotxa.cat",
                        "id": 356948111,
                        "id_str": "356948111",
                        "indices": [3, 19]
                    }, {
                        "screen_name": "lluernia",
                        "name": "lluernia",
                        "id": 882028088,
                        "id_str": "882028088",
                        "indices": [60, 69]
                    }],
                    "urls": [{
                        "url": "https://t.co/eiEomMn09g",
                        "expanded_url": "http://ow.ly/TWXol",
                        "display_url": "ow.ly/TWXol",
                        "indices": [96, 119]
                    }],
                    "media": [{
                        "id": 659377643003990000,
                        "id_str": "659377643003990018",
                        "indices": [139, 140],
                        "media_url": "http://pbs.twimg.com/media/CSaUeQgWUAIJAK3.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaUeQgWUAIJAK3.jpg",
                        "url": "https://t.co/69d7Nae4Iu",
                        "display_url": "pic.twitter.com/69d7Nae4Iu",
                        "expanded_url": "http://twitter.com/NacioLaGarrotxa/status/659377644358774785/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 600,
                                "h": 313,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 340,
                                "h": 177,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 989,
                                "h": 518,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659377644358774800,
                        "source_status_id_str": "659377644358774785",
                        "source_user_id": 356948111,
                        "source_user_id_str": "356948111"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:24 +0000 2015",
                "id": 659379444596002800,
                "id_str": "659379444596002816",
                "text": "Qualcomm intros modems for LTE Cat 1 + LTE-M / NB-IoT. Practically no details on the latter though https://t.co/6Bt0YqEjWG",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 138012607,
                    "id_str": "138012607",
                    "name": "Aapo Markkanen",
                    "screen_name": "markkaapo",
                    "location": "London, UK",
                    "description": "Industry analyst at Machina Research - working on M2M, IoT, and Big Data.",
                    "url": "http://t.co/YgO4q3sR3r",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/YgO4q3sR3r",
                                "expanded_url": "http://machinaresearch.com/",
                                "display_url": "machinaresearch.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 166,
                    "friends_count": 160,
                    "listed_count": 18,
                    "created_at": "Wed Apr 28 11:35:43 +0000 2010",
                    "favourites_count": 28,
                    "utc_offset": 0,
                    "time_zone": "London",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 329,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/620901848229224448/KwgmK8Q9_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/620901848229224448/KwgmK8Q9_normal.png",
                    "profile_link_color": "3B94D9",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/6Bt0YqEjWG",
                        "expanded_url": "https://www.qualcomm.com/news/releases/2015/10/26/qualcomm-announces-new-modem-solutions-designed-support-reliable-global",
                        "display_url": "qualcomm.com/news/releases/…",
                        "indices": [99, 122]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:24 +0000 2015",
                "id": 659379442737946600,
                "id_str": "659379442737946624",
                "text": "RT @_radioterra: Ja podeu escoltar #ElDiaSonor d'avui amb l'actualitat més destacada del dia arreu del país https://t.co/0WbKH7Er1K",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 259315470,
                    "id_str": "259315470",
                    "name": "Kasu #Governemnos",
                    "screen_name": "ktorretti",
                    "location": "Riudoms, Països Catalans",
                    "description": "Estudiant d'enginyeria, treballador precari, periodista d'afició, membre de @FemSafareigcat, del @CPLaCalderera i de la @CUPRiudoms. Sense temps.        |¡*¡|☭♀",
                    "url": "http://t.co/OWrA89rZ1m",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/OWrA89rZ1m",
                                "expanded_url": "http://www.FemSafareig.cat",
                                "display_url": "FemSafareig.cat",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 649,
                    "friends_count": 1247,
                    "listed_count": 11,
                    "created_at": "Tue Mar 01 16:23:10 +0000 2011",
                    "favourites_count": 287,
                    "utc_offset": 3600,
                    "time_zone": "Madrid",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 12181,
                    "lang": "ca",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme9/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme9/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/451462541026156544/Ssxzw4az_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/451462541026156544/Ssxzw4az_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/259315470/1398346524",
                    "profile_link_color": "89C9FA",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "und",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 13:55:10 +0000 2015",
                    "id": 659367805754544100,
                    "id_str": "659367805754544128",
                    "text": "Ja podeu escoltar #ElDiaSonor d'avui amb l'actualitat més destacada del dia arreu del país https://t.co/0WbKH7Er1K",
                    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 2159431275,
                        "id_str": "2159431275",
                        "name": "Ràdio Terra",
                        "screen_name": "_radioterra",
                        "location": "Països Catalans",
                        "description": "Fent néixer una ràdio amb tots els accents, des de tots els racons. Escolta'ns a http://t.co/6FTPt6Movy",
                        "url": "http://t.co/Qw8a3v60w6",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/Qw8a3v60w6",
                                    "expanded_url": "http://radioterra.cat/",
                                    "display_url": "radioterra.cat",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": [{
                                    "url": "http://t.co/6FTPt6Movy",
                                    "expanded_url": "http://radioterra.cat",
                                    "display_url": "radioterra.cat",
                                    "indices": [81, 103]
                                }]
                            }
                        },
                        "protected": false,
                        "followers_count": 5153,
                        "friends_count": 1737,
                        "listed_count": 82,
                        "created_at": "Wed Oct 30 00:47:52 +0000 2013",
                        "favourites_count": 489,
                        "utc_offset": 3600,
                        "time_zone": "Madrid",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 5973,
                        "lang": "ca",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": true,
                        "profile_background_color": "DD2E44",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme6/bg.gif",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme6/bg.gif",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/644295402355867648/yuNwFJGb_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/644295402355867648/yuNwFJGb_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2159431275/1442447016",
                        "profile_link_color": "DD2E44",
                        "profile_sidebar_border_color": "000000",
                        "profile_sidebar_fill_color": "000000",
                        "profile_text_color": "000000",
                        "profile_use_background_image": false,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [{
                            "text": "ElDiaSonor",
                            "indices": [18, 29]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https://t.co/0WbKH7Er1K",
                            "expanded_url": "http://laradio.cat/2015/10/28/eldiasonor-278/",
                            "display_url": "laradio.cat/2015/10/28/eld…",
                            "indices": [91, 114]
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "und"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "ElDiaSonor",
                        "indices": [35, 46]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "_radioterra",
                        "name": "Ràdio Terra",
                        "id": 2159431275,
                        "id_str": "2159431275",
                        "indices": [3, 15]
                    }],
                    "urls": [{
                        "url": "https://t.co/0WbKH7Er1K",
                        "expanded_url": "http://laradio.cat/2015/10/28/eldiasonor-278/",
                        "display_url": "laradio.cat/2015/10/28/eld…",
                        "indices": [108, 131]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:23 +0000 2015",
                "id": 659379440279924700,
                "id_str": "659379440279924737",
                "text": "iPhone6sの電波がいいキャリアはドコモ・au・ソフトバンクのどれ？ https://t.co/5oamA54uJ4",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 249524309,
                    "id_str": "249524309",
                    "name": "べったら漬け",
                    "screen_name": "holsu_am",
                    "location": "北国",
                    "description": "アジアン♪マライカ♪エスニックファッションLove♥︎ 気がむいたら呟きます☻ パニック飼ってます",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 230,
                    "friends_count": 333,
                    "listed_count": 3,
                    "created_at": "Wed Feb 09 06:40:06 +0000 2011",
                    "favourites_count": 178,
                    "utc_offset": 32400,
                    "time_zone": "Tokyo",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 10459,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/528682504769646593/LRfcLJgs_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/528682504769646593/LRfcLJgs_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/249524309/1414882706",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/5oamA54uJ4",
                        "expanded_url": "http://digital-cat.com/apple/iphone6s-plus-docomo-au-softbank-lte/",
                        "display_url": "digital-cat.com/apple/iphone6s…",
                        "indices": [37, 60]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "pt",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:23 +0000 2015",
                "id": 659379439420198900,
                "id_str": "659379439420198913",
                "text": "Enfim ando sem paciência p nada",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2875758543,
                    "id_str": "2875758543",
                    "name": "A ciúmenta. ",
                    "screen_name": "cat_freixo",
                    "location": "Moita, Portugal",
                    "description": "▫Snap- catarina.freixo",
                    "url": "https://t.co/TeFoms7uvJ",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https://t.co/TeFoms7uvJ",
                                "expanded_url": "https://www.facebook.com/catarina.dosd",
                                "display_url": "facebook.com/catarina.dosd",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 406,
                    "friends_count": 340,
                    "listed_count": 0,
                    "created_at": "Thu Nov 13 23:12:46 +0000 2014",
                    "favourites_count": 964,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 3802,
                    "lang": "pt",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/641277841678729216/fcfbCdwN_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/641277841678729216/fcfbCdwN_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2875758543/1444510358",
                    "profile_link_color": "ABB8C2",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "pt"
            }, {
                "metadata": {
                    "iso_language_code": "es",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:23 +0000 2015",
                "id": 659379438224855000,
                "id_str": "659379438224855040",
                "text": "RT @RafaUsui: @jordievole nos ayudas a decirle a @elvendrell_cat que el agua es un suministro basico ?#AcamPAHdaEsther @APE_Cat llevan 3 dí…",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 1601389088,
                    "id_str": "1601389088",
                    "name": "PAH ST. VICENÇ HORTS",
                    "screen_name": "PAHSVH",
                    "location": "Sant Vicenç dels Horts",
                    "description": "Reunions dilluns 11:00 h. Biblioteca Narcís Lunes C/Jacint Verdaguer, 146 Contacte:pahsvh@gmail.com Facebook: PAH SANT VICENÇ DELS HORTS",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1119,
                    "friends_count": 467,
                    "listed_count": 40,
                    "created_at": "Wed Jul 17 16:53:29 +0000 2013",
                    "favourites_count": 393,
                    "utc_offset": 3600,
                    "time_zone": "Madrid",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 3290,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/378800000790966279/cd0ce4a825c58ae5c65536898a1b66e6_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000790966279/cd0ce4a825c58ae5c65536898a1b66e6_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1601389088/1385424306",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "es",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 13:37:04 +0000 2015",
                    "id": 659363252967747600,
                    "id_str": "659363252967747584",
                    "text": "@jordievole nos ayudas a decirle a @elvendrell_cat que el agua es un suministro basico ?#AcamPAHdaEsther @APE_Cat llevan 3 días acampados",
                    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                    "truncated": false,
                    "in_reply_to_status_id": 659112662584832000,
                    "in_reply_to_status_id_str": "659112662584832000",
                    "in_reply_to_user_id": 13426312,
                    "in_reply_to_user_id_str": "13426312",
                    "in_reply_to_screen_name": "jordievole",
                    "user": {
                        "id": 246282025,
                        "id_str": "246282025",
                        "name": "Rafa Usui",
                        "screen_name": "RafaUsui",
                        "location": "Cataluña-Murcia-Asturias",
                        "description": "Un día me di cuenta que ya no tenia miedo. Activista en PAH Barcelona.\nVoy a por los malos.\nSiembra miseria y recogerás rabia.",
                        "url": "https://t.co/O7el3x17hd",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https://t.co/O7el3x17hd",
                                    "expanded_url": "http://rafausui.blogspot.com.es/",
                                    "display_url": "rafausui.blogspot.com.es",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 1207,
                        "friends_count": 669,
                        "listed_count": 24,
                        "created_at": "Wed Feb 02 14:12:24 +0000 2011",
                        "favourites_count": 3603,
                        "utc_offset": -10800,
                        "time_zone": "Greenland",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 18193,
                        "lang": "es",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "D0D1C5",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/774641455/d4834e596bc4a6ade5b88d0a161cbe0b.jpeg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/774641455/d4834e596bc4a6ade5b88d0a161cbe0b.jpeg",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/658102365732667392/eKUO-Ery_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/658102365732667392/eKUO-Ery_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/246282025/1445717249",
                        "profile_link_color": "4A913C",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "7AC3EE",
                        "profile_text_color": "3D1957",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 20,
                    "favorite_count": 5,
                    "entities": {
                        "hashtags": [{
                            "text": "AcamPAHdaEsther",
                            "indices": [88, 104]
                        }],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "jordievole",
                            "name": "Jordi Évole",
                            "id": 13426312,
                            "id_str": "13426312",
                            "indices": [0, 11]
                        }, {
                            "screen_name": "elvendrell_cat",
                            "name": "El Vendrell",
                            "id": 461932208,
                            "id_str": "461932208",
                            "indices": [35, 50]
                        }, {
                            "screen_name": "APE_Cat",
                            "name": "Pobresa Energètica",
                            "id": 2589101634,
                            "id_str": "2589101634",
                            "indices": [105, 113]
                        }],
                        "urls": []
                    },
                    "favorited": false,
                    "retweeted": false,
                    "lang": "es"
                },
                "is_quote_status": false,
                "retweet_count": 20,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "AcamPAHdaEsther",
                        "indices": [102, 118]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "RafaUsui",
                        "name": "Rafa Usui",
                        "id": 246282025,
                        "id_str": "246282025",
                        "indices": [3, 12]
                    }, {
                        "screen_name": "jordievole",
                        "name": "Jordi Évole",
                        "id": 13426312,
                        "id_str": "13426312",
                        "indices": [14, 25]
                    }, {
                        "screen_name": "elvendrell_cat",
                        "name": "El Vendrell",
                        "id": 461932208,
                        "id_str": "461932208",
                        "indices": [49, 64]
                    }, {
                        "screen_name": "APE_Cat",
                        "name": "Pobresa Energètica",
                        "id": 2589101634,
                        "id_str": "2589101634",
                        "indices": [119, 127]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "es"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:23 +0000 2015",
                "id": 659379438061137900,
                "id_str": "659379438061137920",
                "text": ": Oferta 219913Tasques a desenvolupar: Mosso/a magatzem per departament de logística. Tasques: recepció de mer... https://t.co/WPlz4jPABF",
                "source": "<a href=\"http://twitterfeed.com\" rel=\"nofollow\">twitterfeed</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3014280700,
                    "id_str": "3014280700",
                    "name": "DosriusRadio",
                    "screen_name": "DosriusRadio",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 341,
                    "friends_count": 868,
                    "listed_count": 22,
                    "created_at": "Tue Feb 03 10:15:27 +0000 2015",
                    "favourites_count": 33,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 12321,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/563987772545847296/LaiImQbC_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/563987772545847296/LaiImQbC_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3014280700/1430732725",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/WPlz4jPABF",
                        "expanded_url": "http://bit.ly/1GJ6BHv",
                        "display_url": "bit.ly/1GJ6BHv",
                        "indices": [114, 137]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:22 +0000 2015",
                "id": 659379436186239000,
                "id_str": "659379436186238976",
                "text": "@hoopsklyce you think any short term value to Ish Smith in 8 cat, or was last night an anomaly?  I'm dealing with some early injuries too.",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": 195342471,
                "in_reply_to_user_id_str": "195342471",
                "in_reply_to_screen_name": "hoopsklyce",
                "user": {
                    "id": 3246804092,
                    "id_str": "3246804092",
                    "name": "Chris P",
                    "screen_name": "spatula300",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 5,
                    "friends_count": 35,
                    "listed_count": 0,
                    "created_at": "Tue Jun 16 13:06:41 +0000 2015",
                    "favourites_count": 3,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 7,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_0_normal.png",
                    "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_0_normal.png",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": true,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": {
                    "id": "ae0efb43400f26d4",
                    "url": "https://api.twitter.com/1.1/geo/id/ae0efb43400f26d4.json",
                    "place_type": "city",
                    "name": "Lincolnshire",
                    "full_name": "Lincolnshire, IL",
                    "country_code": "US",
                    "country": "United States",
                    "contained_within": [],
                    "bounding_box": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-87.951154, 42.175722],
                                [-87.8837243, 42.175722],
                                [-87.8837243, 42.221752],
                                [-87.951154, 42.221752]
                            ]
                        ]
                    },
                    "attributes": {}
                },
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "hoopsklyce",
                        "name": "David Klyce",
                        "id": 195342471,
                        "id_str": "195342471",
                        "indices": [0, 11]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:22 +0000 2015",
                "id": 659379436131872800,
                "id_str": "659379436131872769",
                "text": "RT @dnicatala: Tant d bo féssiu aquests esforços en benefici dels problemes reals q tenim @miqueliceta, @Albiol_XG i @InesArrimadas\nhttps:/…",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 32909629,
                    "id_str": "32909629",
                    "name": "Jordi SOLÉ ||*|| T42",
                    "screen_name": "JORDINADOR",
                    "location": "Barcelona, Catalunya",
                    "description": "Consultor #RRPP i #Compol. Assessor 2.0 i #Protocol Compositor en CAT, CAST i ENG Especialista en musicals! Catalanista, cristià i culer! Visca @franksinatra!",
                    "url": "http://t.co/AuQOdEHYlx",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/AuQOdEHYlx",
                                "expanded_url": "http://in.directe.cat/totsunitsfemforca/blog/11139/",
                                "display_url": "in.directe.cat/totsunitsfemfo…",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 6653,
                    "friends_count": 1300,
                    "listed_count": 87,
                    "created_at": "Sat Apr 18 15:13:43 +0000 2009",
                    "favourites_count": 119252,
                    "utc_offset": 3600,
                    "time_zone": "Madrid",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 87896,
                    "lang": "ca",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "1A1B1F",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000123493811/66aa1dc5012f9a0b70f7f0cb5ceb7c57.jpeg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000123493811/66aa1dc5012f9a0b70f7f0cb5ceb7c57.jpeg",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/648551278583377920/phDSSuDZ_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/648551278583377920/phDSSuDZ_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/32909629/1412033900",
                    "profile_link_color": "2FC2EF",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "252429",
                    "profile_text_color": "666666",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "und",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 12:55:38 +0000 2015",
                    "id": 659352826632667100,
                    "id_str": "659352826632667136",
                    "text": "Tant d bo féssiu aquests esforços en benefici dels problemes reals q tenim @miqueliceta, @Albiol_XG i @InesArrimadas\nhttps://t.co/dUeMMjY7i6",
                    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 86679848,
                        "id_str": "86679848",
                        "name": "Associació DNI.cat",
                        "screen_name": "dnicatala",
                        "location": "Terrassa, Catalunya",
                        "description": "Aprofitant els recursos que actualment ens proporciona la tecnologia, presentem el Document Nacional d'Identitat dels Països Catalans a http://t.co/XxgJEDB1EK",
                        "url": "http://t.co/DLkop5wLR5",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/DLkop5wLR5",
                                    "expanded_url": "http://www.dni.cat",
                                    "display_url": "dni.cat",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": [{
                                    "url": "http://t.co/XxgJEDB1EK",
                                    "expanded_url": "http://DNI.cat",
                                    "display_url": "DNI.cat",
                                    "indices": [136, 158]
                                }]
                            }
                        },
                        "protected": false,
                        "followers_count": 5783,
                        "friends_count": 1101,
                        "listed_count": 87,
                        "created_at": "Sun Nov 01 07:41:52 +0000 2009",
                        "favourites_count": 64648,
                        "utc_offset": 3600,
                        "time_zone": "Brussels",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 94656,
                        "lang": "ca",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "FFFFFF",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/552505142/bg_twitter-01.jpg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/552505142/bg_twitter-01.jpg",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/628516904911663104/avTkmfeY_normal.png",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/628516904911663104/avTkmfeY_normal.png",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/86679848/1400350887",
                        "profile_link_color": "D90000",
                        "profile_sidebar_border_color": "003957",
                        "profile_sidebar_fill_color": "E0F5FF",
                        "profile_text_color": "003957",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": {
                        "id": "86f5ccdfef130af6",
                        "url": "https://api.twitter.com/1.1/geo/id/86f5ccdfef130af6.json",
                        "place_type": "city",
                        "name": "Terrassa",
                        "full_name": "Terrassa, Catalunya",
                        "country_code": "ES",
                        "country": "España",
                        "contained_within": [],
                        "bounding_box": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [1.9437494, 41.5171401],
                                    [2.0689773, 41.5171401],
                                    [2.0689773, 41.6488121],
                                    [1.9437494, 41.6488121]
                                ]
                            ]
                        },
                        "attributes": {}
                    },
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 16,
                    "favorite_count": 6,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "miqueliceta",
                            "name": "Miquel Iceta Llorens",
                            "id": 74205573,
                            "id_str": "74205573",
                            "indices": [75, 87]
                        }, {
                            "screen_name": "Albiol_XG",
                            "name": "Xavier García Albiol",
                            "id": 243153735,
                            "id_str": "243153735",
                            "indices": [89, 99]
                        }, {
                            "screen_name": "InesArrimadas",
                            "name": "Inés Arrimadas",
                            "id": 552561770,
                            "id_str": "552561770",
                            "indices": [102, 116]
                        }],
                        "urls": [{
                            "url": "https://t.co/dUeMMjY7i6",
                            "expanded_url": "http://www.mon.cat/cat/notices/2015/10/una_operacio_de_filibusterisme_del_pp_bloqueja_la_declaracio_de_jxs_i_cup_152597.php#.VjC8ovETPvI.twitter",
                            "display_url": "mon.cat/cat/notices/20…",
                            "indices": [117, 140]
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "und"
                },
                "is_quote_status": false,
                "retweet_count": 16,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "dnicatala",
                        "name": "Associació DNI.cat",
                        "id": 86679848,
                        "id_str": "86679848",
                        "indices": [3, 13]
                    }, {
                        "screen_name": "miqueliceta",
                        "name": "Miquel Iceta Llorens",
                        "id": 74205573,
                        "id_str": "74205573",
                        "indices": [90, 102]
                    }, {
                        "screen_name": "Albiol_XG",
                        "name": "Xavier García Albiol",
                        "id": 243153735,
                        "id_str": "243153735",
                        "indices": [104, 114]
                    }, {
                        "screen_name": "InesArrimadas",
                        "name": "Inés Arrimadas",
                        "id": 552561770,
                        "id_str": "552561770",
                        "indices": [117, 131]
                    }],
                    "urls": [{
                        "url": "https://t.co/dUeMMjY7i6",
                        "expanded_url": "http://www.mon.cat/cat/notices/2015/10/una_operacio_de_filibusterisme_del_pp_bloqueja_la_declaracio_de_jxs_i_cup_152597.php#.VjC8ovETPvI.twitter",
                        "display_url": "mon.cat/cat/notices/20…",
                        "indices": [139, 140]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:22 +0000 2015",
                "id": 659379435456467000,
                "id_str": "659379435456466944",
                "text": "@yukine_cat_len 雪音さん✡\n🐣ハロウィンスペシャル🐣 \n🎃名前☞雪音さん\n👻今の印象☞イラストが素敵！\n🍇予想身長☞150\n🌞投げたいもの☞お菓子🍭\n💏好きな所☞優しくてとてもお話しやすい所！\n👯メッセージ☞今剣可愛かったです！！とうらぶも星座併せも楽しみです！",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": 1646924912,
                "in_reply_to_user_id_str": "1646924912",
                "in_reply_to_screen_name": "yukine_cat_len",
                "user": {
                    "id": 3061599734,
                    "id_str": "3061599734",
                    "name": "ぷにこ@萌フェス:ほむら＊海未",
                    "screen_name": "miko_9inc",
                    "location": "ながの↔かごしま",
                    "description": "コス・ヲタ垢✡予告なしのコス写注意✡成人済✡腐✡駆け出し審神者✡駆け出し提督✡ラブライバー✡ママさんレイヤー✡九州✡a:395430✡",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 170,
                    "friends_count": 252,
                    "listed_count": 1,
                    "created_at": "Wed Mar 04 16:07:36 +0000 2015",
                    "favourites_count": 500,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 3097,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/657536491585802248/ZA8hzJwk_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/657536491585802248/ZA8hzJwk_normal.png",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3061599734/1445603534",
                    "profile_link_color": "9266CC",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "yukine_cat_len",
                        "name": "雪音@刀剣乱舞＆ディバゲ勢",
                        "id": 1646924912,
                        "id_str": "1646924912",
                        "indices": [0, 15]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "es",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:22 +0000 2015",
                "id": 659379435272015900,
                "id_str": "659379435272015872",
                "text": "@xlawler @jaumesans1960 a mi no me importaría en absoluto oírles en RNE. Ya les he oído en tv3, cat radio y muchos medios públicos catalanes",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": 659375162001891300,
                "in_reply_to_status_id_str": "659375162001891328",
                "in_reply_to_user_id": 2725123168,
                "in_reply_to_user_id_str": "2725123168",
                "in_reply_to_screen_name": "xlawler",
                "user": {
                    "id": 271056942,
                    "id_str": "271056942",
                    "name": "Roberto Encinas",
                    "screen_name": "robertoencinas",
                    "location": "",
                    "description": "Solo hay una manera de evitar ser criticado: no hagas nada, no digas nada, no seas nada. - Aristóteles.",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 51,
                    "friends_count": 40,
                    "listed_count": 2,
                    "created_at": "Wed Mar 23 19:35:45 +0000 2011",
                    "favourites_count": 1625,
                    "utc_offset": 3600,
                    "time_zone": "Madrid",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 1923,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/1285390265/rsedinho_normal.JPG",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1285390265/rsedinho_normal.JPG",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "xlawler",
                        "name": "Lawler",
                        "id": 2725123168,
                        "id_str": "2725123168",
                        "indices": [0, 8]
                    }, {
                        "screen_name": "jaumesans1960",
                        "name": "Jaume #JuntsxSí",
                        "id": 105776548,
                        "id_str": "105776548",
                        "indices": [9, 23]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "es"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:22 +0000 2015",
                "id": 659379433393004500,
                "id_str": "659379433393004544",
                "text": "RT @ally_taylor143: I literally need a munchkin cat. https://t.co/2NQKFBKoiL",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2216797280,
                    "id_str": "2216797280",
                    "name": "Mel",
                    "screen_name": "Mell_Grimes",
                    "location": "",
                    "description": "17 | track | ECHS senior |♡Nathan Alex Corn♡ 5/24/14♡ | insta. mel_grimes | SC mel-grimes |",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 716,
                    "friends_count": 812,
                    "listed_count": 1,
                    "created_at": "Tue Nov 26 23:47:18 +0000 2013",
                    "favourites_count": 3773,
                    "utc_offset": -14400,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 6361,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "FFF04D",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme19/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme19/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/654752392559267840/X6-Dzt-t_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/654752392559267840/X6-Dzt-t_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2216797280/1444940108",
                    "profile_link_color": "F5ABB5",
                    "profile_sidebar_border_color": "FFF8AD",
                    "profile_sidebar_fill_color": "F6FFD1",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 13:52:41 +0000 2015",
                    "id": 659367183177355300,
                    "id_str": "659367183177355265",
                    "text": "I literally need a munchkin cat. https://t.co/2NQKFBKoiL",
                    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 2907829341,
                        "id_str": "2907829341",
                        "name": "Tater",
                        "screen_name": "ally_taylor143",
                        "location": "",
                        "description": "junior @ ec, Jesse King ❤️",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 270,
                        "friends_count": 164,
                        "listed_count": 0,
                        "created_at": "Sat Dec 06 15:20:14 +0000 2014",
                        "favourites_count": 2449,
                        "utc_offset": null,
                        "time_zone": null,
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 4106,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/659365167348752384/EGPIrCxj_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/659365167348752384/EGPIrCxj_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2907829341/1444704641",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": true,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 659367173672931300,
                            "id_str": "659367173672931328",
                            "indices": [33, 56],
                            "media_url": "http://pbs.twimg.com/media/CSaK83NUEAA0xm4.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSaK83NUEAA0xm4.jpg",
                            "url": "https://t.co/2NQKFBKoiL",
                            "display_url": "pic.twitter.com/2NQKFBKoiL",
                            "expanded_url": "http://twitter.com/ally_taylor143/status/659367183177355265/photo/1",
                            "type": "photo",
                            "sizes": {
                                "medium": {
                                    "w": 600,
                                    "h": 776,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 640,
                                    "h": 828,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "small": {
                                    "w": 340,
                                    "h": 439,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "ally_taylor143",
                        "name": "Tater",
                        "id": 2907829341,
                        "id_str": "2907829341",
                        "indices": [3, 18]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 659367173672931300,
                        "id_str": "659367173672931328",
                        "indices": [53, 76],
                        "media_url": "http://pbs.twimg.com/media/CSaK83NUEAA0xm4.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaK83NUEAA0xm4.jpg",
                        "url": "https://t.co/2NQKFBKoiL",
                        "display_url": "pic.twitter.com/2NQKFBKoiL",
                        "expanded_url": "http://twitter.com/ally_taylor143/status/659367183177355265/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 600,
                                "h": 776,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 640,
                                "h": 828,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 340,
                                "h": 439,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659367183177355300,
                        "source_status_id_str": "659367183177355265",
                        "source_user_id": 2907829341,
                        "source_user_id_str": "2907829341"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:22 +0000 2015",
                "id": 659379432939876400,
                "id_str": "659379432939876352",
                "text": "@comply_cat \nおぉっわざわざ加工までありがとうございます！\nしばらく考えてみますね😌👍",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": 659327044187066400,
                "in_reply_to_status_id_str": "659327044187066368",
                "in_reply_to_user_id": 2838269432,
                "in_reply_to_user_id_str": "2838269432",
                "in_reply_to_screen_name": "comply_cat",
                "user": {
                    "id": 2600719392,
                    "id_str": "2600719392",
                    "name": "井上麻生(まお)",
                    "screen_name": "xinomaox",
                    "location": "宮城県大崎市⇒ヱクセリヲン",
                    "description": "DDT両国ピーターパン2015でデビューしましたDNA所属の井上麻生です！\nハードコアバンドでヘイトまき散らしてたりもします。\nメールは xdislifex@yahoo.co.jp まで(•᎑•)\n#ddtpro #dna1128",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 597,
                    "friends_count": 42,
                    "listed_count": 25,
                    "created_at": "Thu Jul 03 00:58:06 +0000 2014",
                    "favourites_count": 187,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 249,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/630379580184924161/8uZCYdK4_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/630379580184924161/8uZCYdK4_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2600719392/1442710680",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "comply_cat",
                        "name": "くずもち",
                        "id": 2838269432,
                        "id_str": "2838269432",
                        "indices": [0, 11]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:21 +0000 2015",
                "id": 659379430553485300,
                "id_str": "659379430553485313",
                "text": "RT @newswirenet: Cat Behavior Clinic Unravels Puzzling Pet Mystery https://t.co/cQ1aNYwTa7 #CatTraining #cats",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 4060881413,
                    "id_str": "4060881413",
                    "name": "زوجو شبابنا",
                    "screen_name": "zzcolvlege",
                    "location": "",
                    "description": "الخااااااص علقمن كث الرسايل",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 0,
                    "friends_count": 23,
                    "listed_count": 0,
                    "created_at": "Wed Oct 28 13:33:16 +0000 2015",
                    "favourites_count": 0,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 24,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/659363822256398337/CvCsD4Kw_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/659363822256398337/CvCsD4Kw_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Tue Oct 27 21:49:41 +0000 2015",
                    "id": 659124835910484000,
                    "id_str": "659124835910483969",
                    "text": "Cat Behavior Clinic Unravels Puzzling Pet Mystery https://t.co/cQ1aNYwTa7 #CatTraining #cats",
                    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 45496426,
                        "id_str": "45496426",
                        "name": "Newswire",
                        "screen_name": "newswirenet",
                        "location": "united states",
                        "description": "Newswire the Social Network of Independent Journalism.  Writers Unite and Report News that Matters",
                        "url": "http://t.co/mlCMEGAfsw",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/mlCMEGAfsw",
                                    "expanded_url": "http://www.newswire.net",
                                    "display_url": "newswire.net",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 1291278,
                        "friends_count": 148,
                        "listed_count": 122,
                        "created_at": "Mon Jun 08 04:05:20 +0000 2009",
                        "favourites_count": 19,
                        "utc_offset": -25200,
                        "time_zone": "Arizona",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 3514,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/634463568646139904/UnEXnygP_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/634463568646139904/UnEXnygP_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/45496426/1441326030",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 578,
                    "favorite_count": 1479,
                    "entities": {
                        "hashtags": [{
                            "text": "CatTraining",
                            "indices": [74, 86]
                        }, {
                            "text": "cats",
                            "indices": [87, 92]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https://t.co/cQ1aNYwTa7",
                            "expanded_url": "http://newswire.net/newsroom/pr/00090828-cat-behavior-clinic-puzzling-pet-mystery.html",
                            "display_url": "newswire.net/newsroom/pr/00…",
                            "indices": [50, 73]
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 578,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "CatTraining",
                        "indices": [91, 103]
                    }, {
                        "text": "cats",
                        "indices": [104, 109]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "newswirenet",
                        "name": "Newswire",
                        "id": 45496426,
                        "id_str": "45496426",
                        "indices": [3, 15]
                    }],
                    "urls": [{
                        "url": "https://t.co/cQ1aNYwTa7",
                        "expanded_url": "http://newswire.net/newsroom/pr/00090828-cat-behavior-clinic-puzzling-pet-mystery.html",
                        "display_url": "newswire.net/newsroom/pr/00…",
                        "indices": [67, 90]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "es",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:21 +0000 2015",
                "id": 659379429072904200,
                "id_str": "659379429072904192",
                "text": "RT @reina_danzante: Que hermoso poder compartir con ustedes la misma PASION POR TALLERES @CANDELA22xT  @Manza22xT  @Solciito_Cat",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2233397461,
                    "id_str": "2233397461",
                    "name": "#1FinalPendienTe",
                    "screen_name": "CANDELA22xT",
                    "location": "",
                    "description": "Enferma de amor por ✰TALLERES✰ //  Fanatica del FÚTBOL⚽ // Algun dia muy lejano voy a ser periodista deportiva!!!!!",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 666,
                    "friends_count": 907,
                    "listed_count": 0,
                    "created_at": "Fri Dec 06 18:51:30 +0000 2013",
                    "favourites_count": 5646,
                    "utc_offset": -7200,
                    "time_zone": "Brasilia",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 20448,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "1A1B1F",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/605537599256707072/qFLk4xOX.jpg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/605537599256707072/qFLk4xOX.jpg",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/648690589836406784/cvEBxymB_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/648690589836406784/cvEBxymB_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2233397461/1444616681",
                    "profile_link_color": "9266CC",
                    "profile_sidebar_border_color": "181A1E",
                    "profile_sidebar_fill_color": "252429",
                    "profile_text_color": "666666",
                    "profile_use_background_image": false,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "es",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 12:54:21 +0000 2015",
                    "id": 659352504283570200,
                    "id_str": "659352504283570176",
                    "text": "Que hermoso poder compartir con ustedes la misma PASION POR TALLERES @CANDELA22xT  @Manza22xT  @Solciito_Cat",
                    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 2839579284,
                        "id_str": "2839579284",
                        "name": "Cami ♣",
                        "screen_name": "reina_danzante",
                        "location": "",
                        "description": "",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 64,
                        "friends_count": 216,
                        "listed_count": 0,
                        "created_at": "Sat Oct 04 04:08:04 +0000 2014",
                        "favourites_count": 598,
                        "utc_offset": -10800,
                        "time_zone": "Santiago",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 1173,
                        "lang": "es",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "000000",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/637842830174625792/alpXVn-R_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/637842830174625792/alpXVn-R_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2839579284/1440908951",
                        "profile_link_color": "9266CC",
                        "profile_sidebar_border_color": "000000",
                        "profile_sidebar_fill_color": "000000",
                        "profile_text_color": "000000",
                        "profile_use_background_image": false,
                        "has_extended_profile": true,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 1,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "CANDELA22xT",
                            "name": "#1FinalPendienTe",
                            "id": 2233397461,
                            "id_str": "2233397461",
                            "indices": [69, 81]
                        }, {
                            "screen_name": "Manza22xT",
                            "name": "Manzaaa ",
                            "id": 3198769418,
                            "id_str": "3198769418",
                            "indices": [83, 93]
                        }, {
                            "screen_name": "Solciito_Cat",
                            "name": "Solcito",
                            "id": 2830802305,
                            "id_str": "2830802305",
                            "indices": [95, 108]
                        }],
                        "urls": []
                    },
                    "favorited": false,
                    "retweeted": false,
                    "lang": "es"
                },
                "is_quote_status": false,
                "retweet_count": 1,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "reina_danzante",
                        "name": "Cami ♣",
                        "id": 2839579284,
                        "id_str": "2839579284",
                        "indices": [3, 18]
                    }, {
                        "screen_name": "CANDELA22xT",
                        "name": "#1FinalPendienTe",
                        "id": 2233397461,
                        "id_str": "2233397461",
                        "indices": [89, 101]
                    }, {
                        "screen_name": "Manza22xT",
                        "name": "Manzaaa ",
                        "id": 3198769418,
                        "id_str": "3198769418",
                        "indices": [103, 113]
                    }, {
                        "screen_name": "Solciito_Cat",
                        "name": "Solcito",
                        "id": 2830802305,
                        "id_str": "2830802305",
                        "indices": [115, 128]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "es"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:21 +0000 2015",
                "id": 659379428548587500,
                "id_str": "659379428548587522",
                "text": "This would be so much easier if I kept my full body cat in the hat suit",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 475356052,
                    "id_str": "475356052",
                    "name": "Ally",
                    "screen_name": "allyportz11",
                    "location": "WMU 17",
                    "description": "Prepare to feel like an old denim vest, because I'm about to bedazzling you.",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 873,
                    "friends_count": 853,
                    "listed_count": 5,
                    "created_at": "Thu Jan 26 23:47:51 +0000 2012",
                    "favourites_count": 21788,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 35113,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434787075/mqcolorfulgrunge.br.jpg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434787075/mqcolorfulgrunge.br.jpg",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/658048213321187328/JfJwY69U_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/658048213321187328/JfJwY69U_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/475356052/1445491378",
                    "profile_link_color": "00CCFF",
                    "profile_sidebar_border_color": "FF5CA2",
                    "profile_sidebar_fill_color": "FFE01A",
                    "profile_text_color": "0097BD",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:20 +0000 2015",
                "id": 659379427734782000,
                "id_str": "659379427734781953",
                "text": "南米か",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 490581980,
                    "id_str": "490581980",
                    "name": "にゃんあず@10/31 男祭り2015",
                    "screen_name": "nyan_Azu_cat",
                    "location": "ANGEL EYES,M-Smile",
                    "description": "やってきました今日は夏菜子と私のSpecial day！！茅原実里と夏菜子とあと少しのオタク成分で電力供給は事足りる。エビたこ勉強中。なにわンダーアドベント,男祭り,エイル武道館,ANIMAX,大学芸会,ももクリ3days,リスアニLIVE,全国ドームツアー2016参戦予定",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 335,
                    "friends_count": 336,
                    "listed_count": 18,
                    "created_at": "Sun Feb 12 18:07:33 +0000 2012",
                    "favourites_count": 5172,
                    "utc_offset": 32400,
                    "time_zone": "Tokyo",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 35926,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/633545325177782273/yrbtMDVk_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/633545325177782273/yrbtMDVk_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/490581980/1443633825",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:20 +0000 2015",
                "id": 659379426325606400,
                "id_str": "659379426325606400",
                "text": "Voleu veure un procés de Bruixeria?Aquest cap d setmana no us perdeu la fira de la Bruixeria de Sant Feliu Sasserra! https://t.co/UUO7KstgNK",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3662850381,
                    "id_str": "3662850381",
                    "name": "cooltur",
                    "screen_name": "twitcooltur",
                    "location": "Catalunya, Espanya",
                    "description": "Descarrega't les nostres rutes històriques i culturals!",
                    "url": "http://t.co/TeAZOsnrko",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/TeAZOsnrko",
                                "expanded_url": "http://www.cooltur.org",
                                "display_url": "cooltur.org",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 34,
                    "friends_count": 25,
                    "listed_count": 0,
                    "created_at": "Tue Sep 15 10:25:15 +0000 2015",
                    "favourites_count": 10,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 21,
                    "lang": "ca",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/643735174056951808/880U81y7_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/643735174056951808/880U81y7_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3662850381/1443724391",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/UUO7KstgNK",
                        "expanded_url": "http://www.firabruixes.cat/",
                        "display_url": "firabruixes.cat",
                        "indices": [117, 140]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:20 +0000 2015",
                "id": 659379425771958300,
                "id_str": "659379425771958272",
                "text": "#sup? (: #catonaroof #sillycat #cat #petsathome #sunnyday #chat #lovecats #hello #salut #window #whatsup https://t.co/g6MqOgySog",
                "source": "<a href=\"http://twitter.com/#!/download/ipad\" rel=\"nofollow\">Twitter for iPad</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3939731356,
                    "id_str": "3939731356",
                    "name": "WorldNaturelle",
                    "screen_name": "WorldNaturelle",
                    "location": "London, England",
                    "description": "I make 100% natural skin care products and write about #nature #skincare #beauty #cosmetics #craft #herbs #herbalmedicine & a #positivemind. Nature loves you (:",
                    "url": "https://t.co/FO7ue8Sm3C",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https://t.co/FO7ue8Sm3C",
                                "expanded_url": "https://worldnaturelle.wordpress.com/",
                                "display_url": "worldnaturelle.wordpress.com",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 84,
                    "friends_count": 244,
                    "listed_count": 6,
                    "created_at": "Mon Oct 12 19:09:16 +0000 2015",
                    "favourites_count": 106,
                    "utc_offset": 0,
                    "time_zone": "London",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 65,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/653649234512769024/tp-9Fuhg_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/653649234512769024/tp-9Fuhg_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3939731356/1444678429",
                    "profile_link_color": "94D487",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "sup",
                        "indices": [0, 4]
                    }, {
                        "text": "catonaroof",
                        "indices": [9, 20]
                    }, {
                        "text": "sillycat",
                        "indices": [21, 30]
                    }, {
                        "text": "cat",
                        "indices": [31, 35]
                    }, {
                        "text": "petsathome",
                        "indices": [36, 47]
                    }, {
                        "text": "sunnyday",
                        "indices": [48, 57]
                    }, {
                        "text": "chat",
                        "indices": [58, 63]
                    }, {
                        "text": "lovecats",
                        "indices": [64, 73]
                    }, {
                        "text": "hello",
                        "indices": [74, 80]
                    }, {
                        "text": "salut",
                        "indices": [81, 87]
                    }, {
                        "text": "window",
                        "indices": [88, 95]
                    }, {
                        "text": "whatsup",
                        "indices": [96, 104]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [],
                    "media": [{
                        "id": 659379414577324000,
                        "id_str": "659379414577324032",
                        "indices": [105, 128],
                        "media_url": "http://pbs.twimg.com/media/CSaWFYIWIAAZe7h.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaWFYIWIAAZe7h.jpg",
                        "url": "https://t.co/g6MqOgySog",
                        "display_url": "pic.twitter.com/g6MqOgySog",
                        "expanded_url": "http://twitter.com/WorldNaturelle/status/659379425771958272/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 340,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 600,
                                "h": 600,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 1024,
                                "h": 1024,
                                "resize": "fit"
                            }
                        }
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:20 +0000 2015",
                "id": 659379424773587000,
                "id_str": "659379424773586944",
                "text": "再度夢精しました #婚活 #招待",
                "source": "<a href=\"https://about.twitter.com/ja/products/twitter-for-windows-8\" rel=\"nofollow\">Twitter for Windows 8</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2972041333,
                    "id_str": "2972041333",
                    "name": "hakureireimu",
                    "screen_name": "reimu_cat",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 404,
                    "friends_count": 43,
                    "listed_count": 5,
                    "created_at": "Sat Jan 10 12:46:29 +0000 2015",
                    "favourites_count": 0,
                    "utc_offset": 28800,
                    "time_zone": "Irkutsk",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 497028,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/564503870491983872/OhzpXKVW_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/564503870491983872/OhzpXKVW_normal.jpeg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "婚活",
                        "indices": [9, 12]
                    }, {
                        "text": "招待",
                        "indices": [13, 16]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:20 +0000 2015",
                "id": 659379424480088000,
                "id_str": "659379424480088065",
                "text": "RT @SuperSportTV: .@OKCThunder host Tim Duncan's @Spurs in their season opener - LIVE on SS6/SS9 at 01:50 (CAT). #SSNBA https://t.co/7UyBbl…",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 432907647,
                    "id_str": "432907647",
                    "name": "Pomeroy",
                    "screen_name": "Butch_Magness",
                    "location": "",
                    "description": "Former News Anchor on ibs.",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 169,
                    "friends_count": 153,
                    "listed_count": 1,
                    "created_at": "Fri Dec 09 22:39:57 +0000 2011",
                    "favourites_count": 15,
                    "utc_offset": 7200,
                    "time_zone": "Athens",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 12154,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/876195295/3585526eb293e35bb5527353c7a37c72.jpeg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/876195295/3585526eb293e35bb5527353c7a37c72.jpeg",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/606124530382323712/M7riQXae_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/606124530382323712/M7riQXae_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/432907647/1441175362",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 14:30:49 +0000 2015",
                    "id": 659376779711402000,
                    "id_str": "659376779711401984",
                    "text": ".@OKCThunder host Tim Duncan's @Spurs in their season opener - LIVE on SS6/SS9 at 01:50 (CAT). #SSNBA https://t.co/7UyBblR4ki",
                    "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 29930178,
                        "id_str": "29930178",
                        "name": "SuperSport",
                        "screen_name": "SuperSportTV",
                        "location": "South Africa",
                        "description": "Join your World of Champions for all the latest sports news & updates",
                        "url": "http://t.co/PtktJosboz",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/PtktJosboz",
                                    "expanded_url": "http://www.supersport.com",
                                    "display_url": "supersport.com",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 1176489,
                        "friends_count": 482,
                        "listed_count": 2649,
                        "created_at": "Thu Apr 09 05:33:58 +0000 2009",
                        "favourites_count": 0,
                        "utc_offset": 7200,
                        "time_zone": "Pretoria",
                        "geo_enabled": false,
                        "verified": true,
                        "statuses_count": 84021,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "000000",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/489410722577657856/R0Dwbt7-.jpeg",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/489410722577657856/R0Dwbt7-.jpeg",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/508970870652411904/SD6SQ_j6_normal.jpeg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/508970870652411904/SD6SQ_j6_normal.jpeg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/29930178/1442906790",
                        "profile_link_color": "0A1667",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "E9FBFB",
                        "profile_text_color": "F91A28",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 12,
                    "favorite_count": 2,
                    "entities": {
                        "hashtags": [{
                            "text": "SSNBA",
                            "indices": [95, 101]
                        }],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "okcthunder",
                            "name": "OKC THUNDER",
                            "id": 24925573,
                            "id_str": "24925573",
                            "indices": [1, 12]
                        }, {
                            "screen_name": "spurs",
                            "name": "San Antonio Spurs",
                            "id": 18371803,
                            "id_str": "18371803",
                            "indices": [31, 37]
                        }],
                        "urls": [],
                        "media": [{
                            "id": 659376778738311200,
                            "id_str": "659376778738311173",
                            "indices": [102, 125],
                            "media_url": "http://pbs.twimg.com/media/CSaTr83WoAUUIPF.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSaTr83WoAUUIPF.jpg",
                            "url": "https://t.co/7UyBblR4ki",
                            "display_url": "pic.twitter.com/7UyBblR4ki",
                            "expanded_url": "http://twitter.com/SuperSportTV/status/659376779711401984/photo/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 340,
                                    "h": 199,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "w": 600,
                                    "h": 351,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 1024,
                                    "h": 600,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 12,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "SSNBA",
                        "indices": [113, 119]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "SuperSportTV",
                        "name": "SuperSport",
                        "id": 29930178,
                        "id_str": "29930178",
                        "indices": [3, 16]
                    }, {
                        "screen_name": "okcthunder",
                        "name": "OKC THUNDER",
                        "id": 24925573,
                        "id_str": "24925573",
                        "indices": [19, 30]
                    }, {
                        "screen_name": "spurs",
                        "name": "San Antonio Spurs",
                        "id": 18371803,
                        "id_str": "18371803",
                        "indices": [49, 55]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 659376778738311200,
                        "id_str": "659376778738311173",
                        "indices": [120, 140],
                        "media_url": "http://pbs.twimg.com/media/CSaTr83WoAUUIPF.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaTr83WoAUUIPF.jpg",
                        "url": "https://t.co/7UyBblR4ki",
                        "display_url": "pic.twitter.com/7UyBblR4ki",
                        "expanded_url": "http://twitter.com/SuperSportTV/status/659376779711401984/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 199,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 600,
                                "h": 351,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 1024,
                                "h": 600,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659376779711402000,
                        "source_status_id_str": "659376779711401984",
                        "source_user_id": 29930178,
                        "source_user_id_str": "29930178"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:20 +0000 2015",
                "id": 659379423980998700,
                "id_str": "659379423980998657",
                "text": "@thelonegwoman @Alley_Cat_BSG @MadMakNY Where do we find it?",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": 659359237949124600,
                "in_reply_to_status_id_str": "659359237949124608",
                "in_reply_to_user_id": 24379587,
                "in_reply_to_user_id_str": "24379587",
                "in_reply_to_screen_name": "thelonegwoman",
                "user": {
                    "id": 320953033,
                    "id_str": "320953033",
                    "name": "Gigi",
                    "screen_name": "trilliaventuras",
                    "location": "",
                    "description": "Mom to triplets. Bibliophile. Star Wars fan. X-Phile. Insomniac.",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 97,
                    "friends_count": 164,
                    "listed_count": 1,
                    "created_at": "Mon Jun 20 19:56:15 +0000 2011",
                    "favourites_count": 235,
                    "utc_offset": -16200,
                    "time_zone": "Caracas",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 2365,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "642D8B",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme10/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme10/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/656918120456654848/OASxQyS1_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/656918120456654848/OASxQyS1_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/320953033/1445104062",
                    "profile_link_color": "FF0000",
                    "profile_sidebar_border_color": "65B0DA",
                    "profile_sidebar_fill_color": "7AC3EE",
                    "profile_text_color": "3D1957",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "thelonegwoman",
                        "name": "spooky des",
                        "id": 24379587,
                        "id_str": "24379587",
                        "indices": [0, 14]
                    }, {
                        "screen_name": "Alley_Cat_BSG",
                        "name": "Alley Cat",
                        "id": 334260742,
                        "id_str": "334260742",
                        "indices": [15, 29]
                    }, {
                        "screen_name": "MadMakNY",
                        "name": "Melissa",
                        "id": 1700178218,
                        "id_str": "1700178218",
                        "indices": [30, 39]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:19 +0000 2015",
                "id": 659379423288815600,
                "id_str": "659379423288815616",
                "text": "@FFms_shark めっちゃでっかいカー用品店もあるよ",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": 659379278757257200,
                "in_reply_to_status_id_str": "659379278757257217",
                "in_reply_to_user_id": 3032082665,
                "in_reply_to_user_id_str": "3032082665",
                "in_reply_to_screen_name": "FFms_shark",
                "user": {
                    "id": 2443405928,
                    "id_str": "2443405928",
                    "name": "Yutaka Obuchi",
                    "screen_name": "FMS_Cat",
                    "location": "Tokyo, JP",
                    "description": "にゃー。音楽体験の拡張に興味がある猫です。 / 明治大学FMS / B2 / 福地研 / WebGL / Raymarching / Demoscene / DTM / FL Studio / おもしろ電子楽器 / 数式音楽 / 音ゲー / DDR / PIU / Stepmania / ToneSphere",
                    "url": "http://t.co/cHIXeFEO7w",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/cHIXeFEO7w",
                                "expanded_url": "http://fms-cat.github.io/",
                                "display_url": "fms-cat.github.io",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 583,
                    "friends_count": 564,
                    "listed_count": 38,
                    "created_at": "Mon Apr 14 06:04:27 +0000 2014",
                    "favourites_count": 5015,
                    "utc_offset": 32400,
                    "time_zone": "Tokyo",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 20525,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/629825683334672384/7Jq24ypG_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/629825683334672384/7Jq24ypG_normal.png",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/2443405928/1434372005",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "FFms_shark",
                        "name": "鮫島リクヤ",
                        "id": 3032082665,
                        "id_str": "3032082665",
                        "indices": [0, 11]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "result_type": "recent",
                    "iso_language_code": "uk"
                },
                "created_at": "Wed Oct 28 14:41:19 +0000 2015",
                "id": 659379421883797500,
                "id_str": "659379421883797504",
                "text": "Modus Vivendi - Цифровая Экономика - Литература - Критика, философия https://t.co/yLmR2jjcIS",
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3228455908,
                    "id_str": "3228455908",
                    "name": "Егор lisitsin",
                    "screen_name": "mvkontr",
                    "location": "Minsk  Belarus",
                    "description": "Автор,экономика,инновации,политика,взаимный...Чем больше в науке математики тем ближе она к Истине(И.Кант)",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 4185,
                    "friends_count": 3545,
                    "listed_count": 19,
                    "created_at": "Sat May 02 13:59:48 +0000 2015",
                    "favourites_count": 0,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 44987,
                    "lang": "ru",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/594505499627786241/bmI5Dn2m_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/594505499627786241/bmI5Dn2m_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3228455908/1430576157",
                    "profile_link_color": "4A913C",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/yLmR2jjcIS",
                        "expanded_url": "http://www.neizvestniy-geniy.ru/cat/literature/kritik/620402.html#.VjDeix4ulZo.twitter",
                        "display_url": "neizvestniy-geniy.ru/cat/literature…",
                        "indices": [69, 92]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "uk"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:19 +0000 2015",
                "id": 659379421644623900,
                "id_str": "659379421644623872",
                "text": "RT @BBAnimals: Hey... If you're going to shave a cat, this is how you do it. https://t.co/04iHAAdhJq",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 3139953542,
                    "id_str": "3139953542",
                    "name": "syara",
                    "screen_name": "_nsyarafina",
                    "location": "Seoul, Republic of Korea",
                    "description": "✨",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 145,
                    "friends_count": 130,
                    "listed_count": 2,
                    "created_at": "Sun Apr 05 07:18:35 +0000 2015",
                    "favourites_count": 7550,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 8137,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "F5ABB5",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme18/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme18/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/649186316702224387/PP13Hq8j_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/649186316702224387/PP13Hq8j_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3139953542/1441957079",
                    "profile_link_color": "ABB8C2",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 11:01:01 +0000 2015",
                    "id": 659323980084592600,
                    "id_str": "659323980084592640",
                    "text": "Hey... If you're going to shave a cat, this is how you do it. https://t.co/04iHAAdhJq",
                    "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 1407277784,
                        "id_str": "1407277784",
                        "name": "Baby Animals",
                        "screen_name": "BBAnimals",
                        "location": "",
                        "description": "The cutest Baby Animals Pics",
                        "url": "https://t.co/Adou4MfIoA",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https://t.co/Adou4MfIoA",
                                    "expanded_url": "https://www.facebook.com/Babyanimalx",
                                    "display_url": "facebook.com/Babyanimalx",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 446522,
                        "friends_count": 7,
                        "listed_count": 1572,
                        "created_at": "Mon May 06 09:26:24 +0000 2013",
                        "favourites_count": 0,
                        "utc_offset": 25200,
                        "time_zone": "Krasnoyarsk",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 71493,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": true,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/378800000777707394/262a47f6acb49b39a454e7f552ad5854_normal.jpeg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000777707394/262a47f6acb49b39a454e7f552ad5854_normal.jpeg",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 463,
                    "favorite_count": 548,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 610885096078491600,
                            "id_str": "610885096078491649",
                            "indices": [62, 85],
                            "media_url": "http://pbs.twimg.com/media/CHpMwh5WwAEnlYi.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CHpMwh5WwAEnlYi.jpg",
                            "url": "https://t.co/04iHAAdhJq",
                            "display_url": "pic.twitter.com/04iHAAdhJq",
                            "expanded_url": "http://twitter.com/BabyAnimalPics/status/610885096120430593/photo/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 340,
                                    "h": 340,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 600,
                                    "h": 600,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 600,
                                    "h": 600,
                                    "resize": "fit"
                                }
                            },
                            "source_status_id": 610885096120430600,
                            "source_status_id_str": "610885096120430593",
                            "source_user_id": 1372975219,
                            "source_user_id_str": "1372975219"
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 463,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "BBAnimals",
                        "name": "Baby Animals",
                        "id": 1407277784,
                        "id_str": "1407277784",
                        "indices": [3, 13]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 610885096078491600,
                        "id_str": "610885096078491649",
                        "indices": [77, 100],
                        "media_url": "http://pbs.twimg.com/media/CHpMwh5WwAEnlYi.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CHpMwh5WwAEnlYi.jpg",
                        "url": "https://t.co/04iHAAdhJq",
                        "display_url": "pic.twitter.com/04iHAAdhJq",
                        "expanded_url": "http://twitter.com/BabyAnimalPics/status/610885096120430593/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 340,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 600,
                                "h": 600,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 600,
                                "h": 600,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 610885096120430600,
                        "source_status_id_str": "610885096120430593",
                        "source_user_id": 1372975219,
                        "source_user_id_str": "1372975219"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:19 +0000 2015",
                "id": 659379420407312400,
                "id_str": "659379420407312385",
                "text": "@smhentai3 かんじまくりくり",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": 659378995574640600,
                "in_reply_to_status_id_str": "659378995574640641",
                "in_reply_to_user_id": 2894280974,
                "in_reply_to_user_id_str": "2894280974",
                "in_reply_to_screen_name": "smhentai3",
                "user": {
                    "id": 3291962304,
                    "id_str": "3291962304",
                    "name": "黒猫",
                    "screen_name": "cat_SM0",
                    "location": "",
                    "description": "干物女です エロいのRTしたりします 普通の話もします キチガイです( ՞ةڼ◔)\n偶に煽ったりするので耐性ない人はフォロー絡まないほうが良いよ",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 218,
                    "friends_count": 187,
                    "listed_count": 2,
                    "created_at": "Sat Jul 25 06:30:23 +0000 2015",
                    "favourites_count": 1981,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 3442,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/658581254506332160/QgMRWu8V_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/658581254506332160/QgMRWu8V_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/3291962304/1442677004",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "smhentai3",
                        "name": "ちょめv(^-^)v",
                        "id": 2894280974,
                        "id_str": "2894280974",
                        "indices": [0, 10]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:19 +0000 2015",
                "id": 659379420243849200,
                "id_str": "659379420243849216",
                "text": "RT @NewCIDCosmetics: #Treat . Get i-flick in time for your #Halloweenmakeup cat eye. RT with #newcid by midnight.  5 to #win #eyeliner http…",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 65168107,
                    "id_str": "65168107",
                    "name": "Clare Blyth",
                    "screen_name": "ClareJFox",
                    "location": "Cardiff",
                    "description": "Mummy of 3 boys! Currently studying to be a teaching assistant! Love photography, concerts, musicals, movies and Michael J.Fox",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1034,
                    "friends_count": 1410,
                    "listed_count": 122,
                    "created_at": "Wed Aug 12 21:32:01 +0000 2009",
                    "favourites_count": 1723,
                    "utc_offset": 0,
                    "time_zone": "London",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 66090,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "FF6699",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme11/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme11/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/575235073894662144/yQHHjVwR_normal.jpeg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/575235073894662144/yQHHjVwR_normal.jpeg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/65168107/1434807250",
                    "profile_link_color": "B40B43",
                    "profile_sidebar_border_color": "CC3366",
                    "profile_sidebar_fill_color": "E5507E",
                    "profile_text_color": "362720",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "metadata": {
                        "iso_language_code": "en",
                        "result_type": "recent"
                    },
                    "created_at": "Wed Oct 28 13:15:58 +0000 2015",
                    "id": 659357943595475000,
                    "id_str": "659357943595474944",
                    "text": "#Treat . Get i-flick in time for your #Halloweenmakeup cat eye. RT with #newcid by midnight.  5 to #win #eyeliner https://t.co/ejWo8JVobO",
                    "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
                    "truncated": false,
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 171945304,
                        "id_str": "171945304",
                        "name": "New CID Cosmetics",
                        "screen_name": "NewCIDCosmetics",
                        "location": "United Kingdom",
                        "description": "Welcome to the official feed for New CID Cosmetics. A British born innovative make up brand with colours that are easy to use and simple to apply.",
                        "url": "http://t.co/dhTnVkBzEJ",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http://t.co/dhTnVkBzEJ",
                                    "expanded_url": "http://newcidcosmetics.com",
                                    "display_url": "newcidcosmetics.com",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 3340,
                        "friends_count": 1074,
                        "listed_count": 38,
                        "created_at": "Wed Jul 28 15:08:30 +0000 2010",
                        "favourites_count": 1298,
                        "utc_offset": 0,
                        "time_zone": "London",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 5035,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "FFFFFF",
                        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000020150761/1666b6e8bcf9588096e57fdd88022fa5.png",
                        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000020150761/1666b6e8bcf9588096e57fdd88022fa5.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/644885073196634113/drv_ejYy_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/644885073196634113/drv_ejYy_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/171945304/1442587573",
                        "profile_link_color": "8B06B8",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "CFCFCF",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 10,
                    "favorite_count": 0,
                    "entities": {
                        "hashtags": [{
                            "text": "Treat",
                            "indices": [0, 6]
                        }, {
                            "text": "Halloweenmakeup",
                            "indices": [38, 54]
                        }, {
                            "text": "newcid",
                            "indices": [72, 79]
                        }, {
                            "text": "win",
                            "indices": [99, 103]
                        }, {
                            "text": "eyeliner",
                            "indices": [104, 113]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 659357942978867200,
                            "id_str": "659357942978867200",
                            "indices": [114, 137],
                            "media_url": "http://pbs.twimg.com/media/CSaCjkMWcAAft0-.jpg",
                            "media_url_https": "https://pbs.twimg.com/media/CSaCjkMWcAAft0-.jpg",
                            "url": "https://t.co/ejWo8JVobO",
                            "display_url": "pic.twitter.com/ejWo8JVobO",
                            "expanded_url": "http://twitter.com/NewCIDCosmetics/status/659357943595474944/photo/1",
                            "type": "photo",
                            "sizes": {
                                "medium": {
                                    "w": 600,
                                    "h": 666,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 900,
                                    "h": 1000,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 340,
                                    "h": 377,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 10,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [{
                        "text": "Treat",
                        "indices": [21, 27]
                    }, {
                        "text": "Halloweenmakeup",
                        "indices": [59, 75]
                    }, {
                        "text": "newcid",
                        "indices": [93, 100]
                    }, {
                        "text": "win",
                        "indices": [120, 124]
                    }, {
                        "text": "eyeliner",
                        "indices": [125, 134]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "NewCIDCosmetics",
                        "name": "New CID Cosmetics",
                        "id": 171945304,
                        "id_str": "171945304",
                        "indices": [3, 19]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 659357942978867200,
                        "id_str": "659357942978867200",
                        "indices": [139, 140],
                        "media_url": "http://pbs.twimg.com/media/CSaCjkMWcAAft0-.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/CSaCjkMWcAAft0-.jpg",
                        "url": "https://t.co/ejWo8JVobO",
                        "display_url": "pic.twitter.com/ejWo8JVobO",
                        "expanded_url": "http://twitter.com/NewCIDCosmetics/status/659357943595474944/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 600,
                                "h": 666,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 900,
                                "h": 1000,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 340,
                                "h": 377,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 659357943595475000,
                        "source_status_id_str": "659357943595474944",
                        "source_user_id": 171945304,
                        "source_user_id_str": "171945304"
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "ja",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:19 +0000 2015",
                "id": 659379420038205400,
                "id_str": "659379420038205440",
                "text": "@azz_cat 11月9日がおすすめ(いらっしゃいませーしてる)",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": 659377193957503000,
                "in_reply_to_status_id_str": "659377193957502976",
                "in_reply_to_user_id": 484669230,
                "in_reply_to_user_id_str": "484669230",
                "in_reply_to_screen_name": "azz_cat",
                "user": {
                    "id": 497051194,
                    "id_str": "497051194",
                    "name": "シングルコアのエセ紳士",
                    "screen_name": "shinshi_modoki",
                    "location": "あなたのお側に",
                    "description": "守備範囲は広いつもり 下ネタ？何それ大好b(ry ほぼ常に抱き枕女子を欲している 徒然なるままにつぶやきます RT多めなので苦手な方は回れ右 こちらからフォローは滅多にしません アイコンはフォロワー(リア友)の妹さんの作 喋ったりゲスかったりな別垢→@shinshi_cas18",
                    "url": "http://t.co/H4mFRHUoUb",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http://t.co/H4mFRHUoUb",
                                "expanded_url": "http://twitcasting.tv/shinshi_modoki",
                                "display_url": "twitcasting.tv/shinshi_modoki",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 133,
                    "friends_count": 127,
                    "listed_count": 10,
                    "created_at": "Sun Feb 19 15:24:23 +0000 2012",
                    "favourites_count": 1004,
                    "utc_offset": 32400,
                    "time_zone": "Tokyo",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 28880,
                    "lang": "ja",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/2261773493/2012-0529-225613474_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/2261773493/2012-0529-225613474_normal.jpg",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "azz_cat",
                        "name": "あずず",
                        "id": 484669230,
                        "id_str": "484669230",
                        "indices": [0, 8]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "ja"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:19 +0000 2015",
                "id": 659379419941875700,
                "id_str": "659379419941875713",
                "text": "A cat puked in my work shoes",
                "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 190053360,
                    "id_str": "190053360",
                    "name": "Ashton Witt",
                    "screen_name": "Trashtonn",
                    "location": "",
                    "description": "Bitter.",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 131,
                    "friends_count": 79,
                    "listed_count": 2,
                    "created_at": "Sun Sep 12 23:36:33 +0000 2010",
                    "favourites_count": 2651,
                    "utc_offset": -18000,
                    "time_zone": "Central Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 8336,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C21848",
                    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/716242972/7eddb1d3ee68ddd7a24305e4939c43d9.jpeg",
                    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/716242972/7eddb1d3ee68ddd7a24305e4939c43d9.jpeg",
                    "profile_background_tile": true,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/659042570077642753/qTgKWpwc_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/659042570077642753/qTgKWpwc_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/190053360/1445963048",
                    "profile_link_color": "3ABAE8",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:19 +0000 2015",
                "id": 659379419874639900,
                "id_str": "659379419874639872",
                "text": "Bryan Adams actuarà al Palau Sant Jordi el 30 de gener: Les entrades per a aquest concert es posaran a la vend... https://t.co/LGSEW3VJy4",
                "source": "<a href=\"http://twitterfeed.com\" rel=\"nofollow\">twitterfeed</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 204051010,
                    "id_str": "204051010",
                    "name": "Jordi Geis",
                    "screen_name": "JordiGeis",
                    "location": "Terrassa",
                    "description": "De vegades has d'anar molt amunt per entendre com ets de petit.",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 69,
                    "friends_count": 280,
                    "listed_count": 6,
                    "created_at": "Sun Oct 17 20:20:22 +0000 2010",
                    "favourites_count": 46,
                    "utc_offset": 3600,
                    "time_zone": "Madrid",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 1695,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/628645137703309312/H8cjmCY4_normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/628645137703309312/H8cjmCY4_normal.png",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/204051010/1406387501",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/LGSEW3VJy4",
                        "expanded_url": "http://bit.ly/1kaaXgr",
                        "display_url": "bit.ly/1kaaXgr",
                        "indices": [114, 137]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:19 +0000 2015",
                "id": 659379419816075300,
                "id_str": "659379419816075264",
                "text": "Gentleman Cat Bows to Everyone Who Greets Him https://t.co/v309118VL2",
                "source": "<a href=\"http://ifttt.com\" rel=\"nofollow\">IFTTT</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 588134247,
                    "id_str": "588134247",
                    "name": "Смешные котики",
                    "screen_name": "Catz_R_cute",
                    "location": "",
                    "description": "Милые и смешные котики.\r\nВсем, кто любит котиков - взаимный фолловинг.\r\n#followback #rufollowback #teamfollowback",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 15,
                    "friends_count": 0,
                    "listed_count": 1,
                    "created_at": "Wed May 23 06:13:40 +0000 2012",
                    "favourites_count": 0,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 19765,
                    "lang": "ru",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/2242861709/______normal.png",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/2242861709/______normal.png",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/v309118VL2",
                        "expanded_url": "http://twitter.com/Catz_R_cute/status/659379419816075264/photo/1",
                        "display_url": "pic.twitter.com/v309118VL2",
                        "indices": [46, 69]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }, {
                "metadata": {
                    "iso_language_code": "und",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:18 +0000 2015",
                "id": 659379418918449200,
                "id_str": "659379418918449152",
                "text": "@CarlesSpa @socialistes_cat Saps perfectament que España l'aturada al TC igual que ha fet amb altres lleis similars.\nMenys demagògia !!!",
                "source": "<a href=\"http://twitter.com/#!/download/ipad\" rel=\"nofollow\">Twitter for iPad</a>",
                "truncated": false,
                "in_reply_to_status_id": 659129203091218400,
                "in_reply_to_status_id_str": "659129203091218432",
                "in_reply_to_user_id": 441157485,
                "in_reply_to_user_id_str": "441157485",
                "in_reply_to_screen_name": "CarlesSpa",
                "user": {
                    "id": 1250277463,
                    "id_str": "1250277463",
                    "name": "pep aixandri",
                    "screen_name": "pepaixandri",
                    "location": "",
                    "description": "",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 244,
                    "friends_count": 362,
                    "listed_count": 5,
                    "created_at": "Thu Mar 07 23:29:30 +0000 2013",
                    "favourites_count": 4579,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 10701,
                    "lang": "ca",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/633280448022597632/jx-wqF3S_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/633280448022597632/jx-wqF3S_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1250277463/1439820798",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": true,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "CarlesSpa",
                        "name": "Carles Spa",
                        "id": 441157485,
                        "id_str": "441157485",
                        "indices": [0, 10]
                    }, {
                        "screen_name": "socialistes_cat",
                        "name": "Socialistes (PSC)",
                        "id": 15133318,
                        "id_str": "15133318",
                        "indices": [11, 27]
                    }],
                    "urls": []
                },
                "favorited": false,
                "retweeted": false,
                "lang": "und"
            }, {
                "metadata": {
                    "iso_language_code": "en",
                    "result_type": "recent"
                },
                "created_at": "Wed Oct 28 14:41:18 +0000 2015",
                "id": 659379418809262100,
                "id_str": "659379418809262080",
                "text": "kkkk weird clown. look at kiyeowoon's hand haha she tickles minseok's chin like how we tickle cat's chin  https://t.co/19r95DaPeV",
                "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                "truncated": false,
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 1965469698,
                    "id_str": "1965469698",
                    "name": "meesup",
                    "screen_name": "jjangminnie",
                    "location": "meesup cendol & ais kacang",
                    "description": "#99番 • #シウミン • #민석시 • #시우민_양손동기화 •",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 68,
                    "friends_count": 96,
                    "listed_count": 0,
                    "created_at": "Wed Oct 16 20:52:10 +0000 2013",
                    "favourites_count": 8663,
                    "utc_offset": 28800,
                    "time_zone": "Beijing",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 16560,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "B2DFDA",
                    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme13/bg.gif",
                    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme13/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/652503230061002752/5DKMDZY2_normal.jpg",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/652503230061002752/5DKMDZY2_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1965469698/1441288615",
                    "profile_link_color": "93A644",
                    "profile_sidebar_border_color": "EEEEEE",
                    "profile_sidebar_fill_color": "FFFFFF",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https://t.co/19r95DaPeV",
                        "expanded_url": "http://twitter.com/peachnana0326/status/659285608251043840/photo/1",
                        "display_url": "pic.twitter.com/19r95DaPeV",
                        "indices": [106, 129]
                    }]
                },
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "lang": "en"
            }]
        };

        var tweets = tweets['twitterResponse'];
        var size = Object.size(tweets);

        // var natural = require('natural'),
        // classifier = new natural.BayesClassifier();
        // classifier.addDocument('my unit-tests failed.', 'software');
        // classifier.addDocument('tried the program, but it was buggy.', 'software');
        // classifier.addDocument('the drive has a 2TB capacity.', 'hardware');
        // classifier.addDocument('i need a new power supply.', 'hardware');
        // classifier.train();
        // console.log(classifier.classify('did the tests pass?'));
        // console.log(classifier.classify('did you buy a new drive?'));



        return (
            <div>Done</div>
        );

    }
});


module.exports = DataView;
