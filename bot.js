const randomWords = require('random-words');
const axios = require('axios')

const array = [
`Anyone need some content/sessions/calls 💰😫💦 ?! I’m hornyyyy and selling 😚  #sellingnudes #buyingnudes #buyingcontent #sellingcontent #nudes #horny #cockslut #cumslut #cumtribute #tits #boobs #pussy #slut #whore #bbc #cocktribute #buyingcontent #snapchatsession #${randomWords(1)}`,
`Add my snap if your buying content ♥️ I’m horny af let’s play 😊I Verify ‼️ #wet #ebony #bbc #horny #snapchat  #seller #buyingcontent #SellingContent  #nudes #secretseller #buyingnudes #sellingnudes #cumslut #spoilme #Sellingcontent #nsfwtwt #${randomWords(1)} #sellingnudes`,
` feel really hot right now 🥵 Do you want to warm up with me? 🤤🥵Dm 😈 Sessions available 👯💸💰#Snapchat #paypalonly #sellingnudes #buyingnudes #paypig #buyingcontent #horny #sex #fuck #CashAppPayday #Sellingcontents #${randomWords(1)} #nsfwtw`,
`Back to business👋🏻 SellingContent/Sessions 💦🍑\n #sellingnudes #buyingnudes #cheapnudes #paypalready #nsfwtwt #skypesession #premiumsnap #sellingcontent #buyingcontent #loli #loliheaven #${randomWords(1)}`,
`Any active buyers right now? Dm's open if you're a serious buyer 🥰 willing to help you cum💦😍 #sellingnudes #sellingcontent #buyingnudes #buyingcontent #paypal #dropbox #${randomWords(1)}`,
`Plenty of reviews and my buyers shout me out! Hmu?👀💦\nI’m so fucking wet and horny..come and play daddy?😩\npic.twitter.com/CgvcISMFXE #buyingcontent #sellingnudes #buyingnudes #dropbox #videocall #snapsession #femdom #nsfwtwt #findom ##fetish #onlyfans #${randomWords(1)}`,
`Ft me 🥹🥹#sellingcontent #onlyfans #sexy #paypig #contentcreator #buyingcontent #findom #onlyfansgirl #selling #model #onlyfan #cute #snapchat #onlyfanspromo #${randomWords(1)} #followme #linkinbio #petite #love #sellingnudes #feet #${randomWords(1)} #paypal #cashapp`,
`Do you like juicy and creamy pussies? #xxx #qos #cumming #like #sellingnudes #pornhub #${randomWords(1)} #twerk #cute #pussy #nsfwtw #cashapp #fetish #nsfwtwt #${randomWords(1)}`,
`$25 FaceTime and Snapchat calls 🤪 Who wants to play with me… horny  🥺 #horny #sellingnudes #${randomWords(1)}  #dropboxleaks  #latina #pytslut #nsfwtw #${randomWords(1)} #sellingcontent #facetime #snapchat #femdom #findom`,
`Who’s on and buying today?! Dm me babes 🥰pic.twitter.com/Y3T1Ti0BF9\n#buyingcontent #buyingnudes #nudes #horny #cockslut #cumslut #cumtribute #tits #boobs #pussy #slut #${randomWords(1)} #snapchats #SellingContent #sellingnudes #pawg #ass #twerk #porn #${randomWords(1)}`,
`Im selling all day, goal is 25$ Dm me \nIm selling Dropboxes, sessions, vidcalls dm me #sellingcontent #sellingnudes #sellingass #humanatm #bigbootyebony #ebonyhoes #FinDom #nsfwtwt #buyingcontent #nomeetups #latina #bigtits #${randomWords(1)}`,
`who's buying nudes today? Very Cheap prices 😊horny✅PayPal/CashApp only \n#nudes #sellnudes #sellingnudes #sext #sexy #horny #cumtribute #paypig #horny #${randomWords(1)}`,
`Anyone wants to buy some content! ? 🍑  #sellingcontent #buyingcontent #cumtribute #findom #premiumsnapchat #sexting  #leaksdiscord #cumslut #horny #Dropbox #loli #buymynudes #buyingnudes #sellingnudes #nsfw #${randomWords(1)}`,
`$25 FaceTime and Snapchat calls 🤪 Who wants to play with me… horny pic.twitter.com/ck62puBrtF🥺\n #nsfw #horny #sellingnudes #sellingcontent #buyingcontent #SnapChat #AdultWork #sellingnudes #buyingnudes #${randomWords(1)} #legitseller #${randomWords(1)} #facetime`,
`Dm me to buy nudes or videocalls \nI DO VERIFY WITH FACE \n 💋 #nudesforsale #sellingnudes #buymynudes #nudeseller #buymycontent #dropboxleaks  #${randomWords(1)} #pytslut #nsfwtw #exposed # #hotelsex #toyplay #paytoplay #pussyplay #${randomWords(1)} #masturbation`,
`I’m #sellingcontent #sellingnudes who is up horny and buying? Ask me for my menu or prices. DMs OPEN pic.twitter.com/naAlyV7v9j #nudes #notimewasters #onlyfans #nsfw #buyingcontent #buyingnudes #sext #snapchat #findom #femdom #facetime #${randomWords(1)}`,
`who wants gamer girl pussy hmu💦🤭\n#sellingnudes #buyingnudes #isellnudes #cumtribute #findom #gamergirl #sexting #cumtribute #cumslut #horny #slut #wetpussy #pussy #sex #camSex #Dropbox #dickrate #skype #amazon #paypal  #CashAppOnly #cumsluts #${randomWords(1)}`,
`Selling content #sellingcontent #buyingcontent #sellingnudes #buyingnudes #onlyfansleaks #bigTits #dropboxleaks #findom #latina #pytslut #nsfwtw #${randomWords(1)}  #Uncensorednew #xrated #paypig #paypiggy`,
`$25 FaceTime and Snapchat calls 🤪 Who wants to play with me… horny  🥺   #nsfw #horny #sellingnudes #nudes #skype #sellingcontent #facetime #college #dropboxleaks  #latina #nsfwtw #${randomWords(1)} `,
`Anyone wants to buy some content!?🍑  #sellingcontent #buyingcontent #cumtribute #findom #${randomWords(1)} #findom #bigTits #bigTits #pytschool #pytlatinas #sellingnudes #nsfw`,
`Add me on snap if your buying ♥️\nSnap me👻\nI Verify ‼️♥️\n\n#wet #ebony #bbc #teen #horny #snapchat #buyer #seller #buyingcontent #nudes #secretseller #selling #buyingnudes #sellingnudes #cumslut #onlyfans #spoilme #sugardaddy #daddy #SellingContent #${randomWords(1)}`,
`dm me 💵 #buyingconent #sellingcontent #buyingnudes #sellingnudes  #onlyfansleaks #bigTits #dropboxleaks  #latina #pytslut #nsfwtw #${randomWords(1)}  `,
`Im selling all night, goal is 25$ Dm me Im selling Dropboxes, sessions,  vidcalls  dm me #sellingcontent #sellingnudes #sellingass #humanatm #bigbootyebony #ebonyhoes #FinDom  #nsfwtwt #buyingcontent #bigTits #latina #pytslut #nsfwtw #${randomWords(1)} #loli`,
`I’m selling Snapchat sessions custom nudes and videos untill u cum 😩❤️❤️ #sellingnudes #buyingnudes #sellingcontent #buyingcontent #nsfw #horny #kink #findom #p2p #fetish #naughty #joi #gfe #onlyfans #onlyfanspromo #dropbox #sexting #sexy #nsfwtwt #twerkingvideos\npic.twitter.com/o00sxVcJGt`,
`Anyone horny? Add my snap @ Lati2899 🧚‍♀️ pic.twitter.com/CgvcISMFXE\n#buyingcontent #sellingcontent #nsfwtwt #sellingnudes #secretseller #${randomWords(1)}`,
`😍🤤 Kinda bored asf! I'm giving free nudes to those who follow rt and likes this.♥️ \n\n#sellingnudes #buyingnude #isellnude #cumtribute #findom #premiumsnapchat #sexting #cumtribute #cumslut #horny #slut #wetpussy #sellingcontent #AdultWork  #paypal #${randomWords(1)}`,
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