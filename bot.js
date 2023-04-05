const randomWords = require('random-words');
const axios = require('axios')

const array = [
`tweet one and one ${randomWords(1)}`,
`tweet two and one ${randomWords(1)}`,
`tweet three and one ${randomWords(1)}`
]

function Loop() {
    console.log('Enviando Tweet...')
	for(i = 0; i < array.length; i++){
	    (function(i){
	        setTimeout(function(){
	            try {
                    var d = new Date(Date.now())
                    var options = {
                      method: 'POST',
                      url: 'https://twitter.com/i/api/graphql/vG6RO31HxvpGl9JY79lCxg/CreateTweet',
                      headers: {
                        cookie: 'YOUR_OWN_COOKIE',
                        authority: 'twitter.com',
                        accept: '*/*',
                        'accept-language': 'es-ES,es;q=0.9,en;q=0.8',
                        authorization: 'YOUR_OWN_AUTH',
                        'content-type': 'application/json',
                        origin: 'https://twitter.com',
                        referer: 'https://twitter.com/home',
                        'sec-ch-ua': 'Not?A_Brand;v=8, Chromium;v=108, Google',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': 'Windows',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
                        'x-csrf-token': 'YOUR_OWN_TOKEN',
                        'x-twitter-active-user': 'yes',
                        'x-twitter-auth-type': 'OAuth2Session',
                        'x-twitter-client-language': 'en'
                      },
                      data: {
                        variables: {
                          tweet_text: `${array[i]}`,
                          dark_request: false,
                          media: {media_entities: [], possibly_sensitive: false},
                          withDownvotePerspective: false,
                          withReactionsMetadata: false,
                          withReactionsPerspective: false,
                          semantic_annotation_ids: []
                        },
                        features: {
                          tweetypie_unmention_optimization_enabled: true,
                          vibe_api_enabled: true,
                          responsive_web_edit_tweet_api_enabled: true,
                          graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
                          view_counts_everywhere_api_enabled: true,
                          longform_notetweets_consumption_enabled: true,
                          tweet_awards_web_tipping_enabled: false,
                          interactive_text_enabled: true,
                          responsive_web_text_conversations_enabled: false,
                          longform_notetweets_richtext_consumption_enabled: false,
                          responsive_web_twitter_blue_verified_badge_is_enabled: true,
                          responsive_web_graphql_exclude_directive_enabled: true,
                          verified_phone_label_enabled: false,
                          freedom_of_speech_not_reach_fetch_enabled: false,
                          standardized_nudges_misinfo: true,
                          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: false,
                          responsive_web_graphql_timeline_navigation_enabled: true,
                          responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
                          responsive_web_enhance_cards_enabled: false
                        },
                        queryId: '7nGju2P2iVyIdhbLUKHPyg'
                      }
                    };

                    axios.request(options).then(function (response) {
                      console.log('Tweet enviado a las: ' + d.toTimeString())
                    }).catch(function (error) {
                      console.error(error.response.data);
                    });
                } catch (error) {
                    console.error(error.response.data)
                }
                if (i == array.length - 1){
                    Loop()
                }
	        }, 1800000 * i * (1 + (Math.random() * (0.099 - 0.012) + 0.012)).toFixed(4))
	    }(i))
	}
}
setTimeout(() => {
	Loop()
}, 10000);
