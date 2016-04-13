var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var rd3 = require('react-d3');
var React = require('react');

var DataGrapher = React.createClass({
    _size: function(obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    },
    getDefaultProps: function() {
        return {
            title: '',
            type: 'pie',
            classifier: '{"classifier":{"classFeatures":{"Neutral":{"0":3,"1":2,"2":2,"3":3,"4":4,"5":10,"6":9,"7":7,"8":5,"9":3,"10":5,"11":2,"12":4,"13":3,"14":5,"15":9,"16":9,"17":5,"18":2,"19":2,"20":3,"21":5,"23":2,"24":3,"25":4,"28":3,"32":2,"33":2,"34":2,"35":2,"36":3,"37":2,"38":2,"39":2,"40":2,"41":2,"42":2,"43":2,"44":2,"45":2,"46":2,"47":2,"50":2,"55":2,"58":2,"62":2,"63":2,"65":2,"68":2,"71":2,"73":2,"78":2,"87":2,"88":4,"89":3,"90":4,"91":2,"92":2,"93":3,"94":3,"95":2,"96":2,"97":2,"98":2,"99":2,"100":2,"101":2,"102":3,"103":2,"104":2,"105":2,"106":2,"107":3,"108":2,"109":3,"113":2,"114":2,"115":2,"116":2,"117":4,"118":2,"119":2,"120":2,"121":2,"125":2,"129":2,"132":2,"133":2,"134":2,"135":2,"136":2,"137":2,"138":2,"139":2,"140":2,"141":2,"142":2,"143":2,"144":2,"145":2,"146":2,"147":3,"148":2,"150":2,"151":2,"152":2,"153":2,"154":2,"155":2,"156":2,"160":2,"161":2,"162":2,"163":2,"164":3,"165":2,"166":2,"167":2,"168":3,"179":2,"185":2,"200":2,"205":2,"206":2,"207":2,"208":2,"209":3,"210":2,"211":2,"212":2,"213":2,"214":2,"215":2,"216":2,"217":2,"218":2,"236":2,"237":2,"238":2,"239":2,"240":2,"241":2,"242":2,"243":2,"244":2,"245":2,"246":2,"247":2,"248":2,"249":2,"250":2,"251":2,"252":2,"253":2,"254":2,"255":2,"256":2,"257":2,"258":2,"259":2,"260":2,"261":2,"262":2},"Negative":{"4":2,"5":2,"6":2,"10":3,"12":2,"14":3,"15":5,"16":2,"18":2,"19":2,"20":2,"21":2,"22":3,"23":2,"24":2,"25":4,"26":2,"27":2,"28":2,"29":2,"30":2,"31":2,"34":3,"36":2,"44":2,"49":2,"53":2,"62":2,"63":2,"64":2,"65":2,"66":2,"67":2,"105":2,"106":2,"107":2,"130":2,"149":2,"181":3,"183":3,"186":2,"187":3,"193":3,"194":3,"195":3,"196":3,"197":3,"198":4,"199":3,"200":3,"201":3,"202":3,"203":3,"204":3,"264":2,"265":2,"266":2,"267":2,"268":2,"269":2,"270":2,"271":2,"272":2,"273":2,"274":2},"Positive":{"0":2,"3":2,"4":5,"5":5,"6":3,"7":2,"9":3,"10":4,"11":3,"12":2,"13":3,"14":5,"15":9,"16":6,"17":3,"19":3,"20":5,"21":4,"22":4,"23":4,"24":2,"25":4,"26":3,"28":3,"30":4,"33":2,"34":2,"39":2,"40":2,"48":2,"49":2,"50":2,"51":2,"52":2,"53":4,"54":2,"55":3,"56":2,"57":2,"58":2,"59":4,"60":3,"61":5,"63":3,"64":2,"65":2,"66":2,"68":2,"69":2,"70":2,"71":2,"72":2,"73":2,"75":2,"76":2,"77":2,"78":2,"79":2,"80":2,"81":2,"82":2,"83":2,"84":2,"85":2,"86":2,"94":2,"110":2,"111":2,"112":2,"113":2,"118":3,"121":2,"123":3,"124":2,"125":3,"126":2,"127":2,"128":2,"129":2,"130":3,"131":2,"133":2,"134":2,"135":2,"136":2,"138":2,"169":2,"170":2,"171":2,"172":4,"173":2,"174":2,"175":2,"176":2,"177":2,"178":2,"180":2,"181":2,"182":2,"183":2,"184":2,"185":2,"186":2,"187":2,"188":2,"189":2,"190":2,"191":2,"192":2,"219":2,"220":2,"223":2,"224":2,"225":2,"226":2,"227":2,"228":2,"229":2,"230":2,"232":2,"233":2,"234":2,"275":3,"276":3,"277":3,"278":2,"279":2,"280":2}},"classTotals":{"Neutral":19,"Negative":7,"Positive":16},"totalExamples":40,"smoothing":1},"docs":[{"label":"Neutral","text":["get","karpin","lenovo","a6000","flip","cover","screen","guard","combo","Rs","449","onli","mrp","Rs","298","http","co","j8a6h2fhal","http","co","fkuypmqc0z"]},{"label":"Negative","text":["RT","lenovo_in","We","ve","phone","batteri","die","when","need","tell","us","funniest","phoneyfail","http","co","417jk8k52l"]},{"label":"Neutral","text":["flipkartsupport","lenovo_in","It","will","support","video","call","not","a6000"]},{"label":"Neutral","text":["flipkartd","discount","free","charg","case","lenovo","vibe","X2","http","co","tbpc6crhh","http","co","0asy2syuv6"]},{"label":"Positive","text":["lenovo","a6000","pictur","galleri","http","co","t4sxtebynx","lenovo","lenovoa6000","a6000","android"]},{"label":"Positive","text":["techotweet","lenovo","a6000","cheapest","4G","phone","http","co","arc7ukt4uu"]},{"label":"Positive","text":["techotweet","lenovo","s90","selfi","4G","selfi","lover","will","love","It","http","co","0hltojiewq"]},{"label":"Negative","text":["techotweet","lenovo","vibe","shot","alwai","confus","phone","Or","came","http","co","fqgw2ygjxi"]},{"label":"Positive","text":["techotweet","lenovo","a7000","next","stock","killer","phone","By","lenovo","http","co","7ia5vnx789"]},{"label":"Positive","text":["RT","lenovo_vib","there","noth","faux","phone","quick","100","genuin","intel","power","speed","p90","fastfurr","http","co","w8dkjs11va"]},{"label":"Neutral","text":["brown","leather","belt","pouch","flip","cover","lenovo","a6000","http","co","9quuiepewr"]},{"label":"Neutral","text":["rainbow","scratch","guard","screen","protector","lenovo","a6000","clear","glossi","http","co","bjnfmme2ig"]},{"label":"Neutral","text":["lenovo","a6000","pull","Up","slip","In","pouch","black","colour","http","co","1sqyn4meor"]},{"label":"Neutral","text":["support","stand","holder","lenovo","a6000","http","co","ij3toq1hk9"]},{"label":"Negative","text":["support","stand","holder","lenovo","a6000","http","co","ij3toq1hk9"]},{"label":"Neutral","text":["black","leather","belt","pouch","flip","cover","lenovo","a6000","smartphon","http","co","13bmugbrq3"]},{"label":"Positive","text":["brand","temper","glass","screen","protector","lenovo","a6000","http","co","h0yv5vid1t"]},{"label":"Neutral","text":["leather","flip","cover","perfect","pre","sale","salescis","cut","hole","lenovo","a6000","mobil","phone","http","co","iukfqs8h0d"]},{"label":"Positive","text":["deal","lenovo","a536","white","sell","cheaper","inr","6694","todai","http","co","5iemhrp4dk","flipkart"]},{"label":"Neutral","text":["samsungmobilein","micromax_mobil","htc_in","lgusamobil","lenovo_in","videoconhandset","airtel_pres","ideacellular","http","co","d0vnvowuo"]},{"label":"Neutral","text":["lenovo_in","need","replac","old","lenovo","thinkpad","new","flex","pad","earlier","combo","offer","smartphon","can","offer"]},{"label":"Neutral","text":["lenovo","a7000","sub","10000","inr","categori","4G","lte","android","phone","come","soon","india","http","co","6ogd3wtqea","phone"]},{"label":"Neutral","text":["lenovo","sisleys90","64","bit","snapdragon","410","processor","launch","Rs","19990","the","lenovo","sislei","s90","just","http","co","djxpaz2ojb"]},{"label":"Positive","text":["wowww","lenovo","a6000","4G","mobil","open","sale","start","No","registr","requir","bui","now","first","4G","mobil","Rs","http","co","6ywy5reudi"]},{"label":"Neutral","text":["black","leather","belt","flip","cover","new","launch","mobil","smartphon","lenovo","vibe","shot","http","co","lxlolnka8z"]},{"label":"Positive","text":["dear","lenovo_in","I","faulti","p780","phone","run","pillar","post","No","on","listen","last","month","intelindia","nixxin"]},{"label":"Negative","text":["lenovo_in","I","purchas","lenovo","p780","hang","everi","moment","I","cant","us","even","on","app","servic","centr","sai","defect","what"]},{"label":"Negative","text":["lenovo_in","I","purchas","lenovo","p780","hang","everi","moment","I","cant","us","even","on","app","servic","centr","sai","defect","what"]},{"label":"Neutral","text":["lenovo_a6000","social","media","promot","servic","verifi","increas","popular","fan","viewer","creadibl","countri","target","worldwid","9278777877"]},{"label":"Positive","text":["techotweet","lenovo","a6000","cheapest","4G","phone","http","co","arc7ukbt6k"]},{"label":"Positive","text":["techotweet","lenovo","s90","selfi","4G","selfi","lover","will","love","It","http","co","0hltojqd8g"]},{"label":"Positive","text":["lenovo","a6000","4G","smart","phone","Rs","6999","onli","for","visa","debit","card","Rs","6300","sale","open","all","http","co","fy5xsuxe2j","http","co","y06gowxytv"]},{"label":"Positive","text":["deal","lenovo","s860","titanium","sell","cheaper","inr","14500","todai","http","co","vgrmfln7g1","flipkart"]},{"label":"Neutral","text":["lenovo","launch","4G","enabl","phablet","K3","note","china","price","cny","899","http","co","epuif1ephg","gadget","smartphon"]},{"label":"Neutral","text":["lenovo","a7000","debut","barcelona","http","co","87xbhpbxu5","tech","lenovo","lenovoa7000","smartphon","android","androidlollipop"]},{"label":"Neutral","text":["RT","rima_thwrk","ranbir","rishi","touch","besharam","I","realli","want","happi","alwai","allah","protect","lenovo_a6000","chintskap","ranbirkapoor"]},{"label":"Negative","text":["paytm","order","NO","824621308","I","purchas","lenovo","a369i","mobil","found","not","work","So","pleas","either","replac","refund","monei"]},{"label":"Positive","text":["smartphon","lenovo_in","lenovo","a6000","4glte","smartphon","budget","read","http","co","zep4z4r5xx"]},{"label":"Positive","text":["smartphon","lenovo_in","lenovo","a6000","4glte","smartphon","budget","read","http","co","ygrudjs4zi","http","co","gkstllhfke"]}],"features":{"64":1,"100":1,"298":1,"410":1,"449":1,"899":1,"6300":1,"6694":1,"6999":1,"10000":1,"14500":1,"19990":1,"824621308":1,"get":1,"karpin":1,"lenovo":1,"a6000":1,"flip":1,"cover":1,"screen":1,"guard":1,"combo":1,"Rs":1,"onli":1,"mrp":1,"http":1,"co":1,"j8a6h2fhal":1,"fkuypmqc0z":1,"RT":1,"lenovo_in":1,"We":1,"ve":1,"phone":1,"batteri":1,"die":1,"when":1,"need":1,"tell":1,"us":1,"funniest":1,"phoneyfail":1,"417jk8k52l":1,"flipkartsupport":1,"It":1,"will":1,"support":1,"video":1,"call":1,"not":1,"flipkartd":1,"discount":1,"free":1,"charg":1,"case":1,"vibe":1,"X2":1,"tbpc6crhh":1,"0asy2syuv6":1,"pictur":1,"galleri":1,"t4sxtebynx":1,"lenovoa6000":1,"android":1,"techotweet":1,"cheapest":1,"4G":1,"arc7ukt4uu":1,"s90":1,"selfi":1,"lover":1,"love":1,"0hltojiewq":1,"shot":1,"alwai":1,"confus":1,"Or":1,"came":1,"fqgw2ygjxi":1,"a7000":1,"next":1,"stock":1,"killer":1,"By":1,"7ia5vnx789":1,"lenovo_vib":1,"there":1,"noth":1,"faux":1,"quick":1,"genuin":1,"intel":1,"power":1,"speed":1,"p90":1,"fastfurr":1,"w8dkjs11va":1,"brown":1,"leather":1,"belt":1,"pouch":1,"9quuiepewr":1,"rainbow":1,"scratch":1,"protector":1,"clear":1,"glossi":1,"bjnfmme2ig":1,"pull":1,"Up":1,"slip":1,"In":1,"black":1,"colour":1,"1sqyn4meor":1,"stand":1,"holder":1,"ij3toq1hk9":1,"smartphon":1,"13bmugbrq3":1,"brand":1,"temper":1,"glass":1,"h0yv5vid1t":1,"perfect":1,"pre":1,"sale":1,"salescis":1,"cut":1,"hole":1,"mobil":1,"iukfqs8h0d":1,"deal":1,"a536":1,"white":1,"sell":1,"cheaper":1,"inr":1,"todai":1,"5iemhrp4dk":1,"flipkart":1,"samsungmobilein":1,"micromax_mobil":1,"htc_in":1,"lgusamobil":1,"videoconhandset":1,"airtel_pres":1,"ideacellular":1,"d0vnvowuo":1,"replac":1,"old":1,"thinkpad":1,"new":1,"flex":1,"pad":1,"earlier":1,"offer":1,"can":1,"sub":1,"categori":1,"lte":1,"come":1,"soon":1,"india":1,"6ogd3wtqea":1,"sisleys90":1,"bit":1,"snapdragon":1,"processor":1,"launch":1,"the":1,"sislei":1,"just":1,"djxpaz2ojb":1,"wowww":1,"open":1,"start":1,"No":1,"registr":1,"requir":1,"bui":1,"now":1,"first":1,"6ywy5reudi":1,"lxlolnka8z":1,"dear":1,"I":1,"faulti":1,"p780":1,"run":1,"pillar":1,"post":1,"on":1,"listen":1,"last":1,"month":1,"intelindia":1,"nixxin":1,"purchas":1,"hang":1,"everi":1,"moment":1,"cant":1,"even":1,"app":1,"servic":1,"centr":1,"sai":1,"defect":1,"what":1,"lenovo_a6000":1,"social":1,"media":1,"promot":1,"verifi":1,"increas":1,"popular":1,"fan":1,"viewer":1,"creadibl":1,"countri":1,"target":1,"worldwid":1,"9278777877":1,"arc7ukbt6k":1,"0hltojqd8g":1,"smart":1,"for":1,"visa":1,"debit":1,"card":1,"all":1,"fy5xsuxe2j":1,"y06gowxytv":1,"s860":1,"titanium":1,"vgrmfln7g1":1,"enabl":1,"phablet":1,"K3":1,"note":1,"china":1,"price":1,"cny":1,"epuif1ephg":1,"gadget":1,"debut":1,"barcelona":1,"87xbhpbxu5":1,"tech":1,"lenovoa7000":1,"androidlollipop":1,"rima_thwrk":1,"ranbir":1,"rishi":1,"touch":1,"besharam":1,"realli":1,"want":1,"happi":1,"allah":1,"protect":1,"chintskap":1,"ranbirkapoor":1,"paytm":1,"order":1,"NO":1,"a369i":1,"found":1,"work":1,"So":1,"pleas":1,"either":1,"refund":1,"monei":1,"4glte":1,"budget":1,"read":1,"zep4z4r5xx":1,"ygrudjs4zi":1,"gkstllhfke":1},"stemmer":{},"lastAdded":39,"events":{"_events":{}}}'
        };
    },
    render: function() {
            console.log("<<<<<<<<<CLASSIFIER>>>>>>>>");
            console.log(this.props.classifier);
            var self = this;
            var classifier = JSON.parse(this.props.classifier);
            var totalEvents = classifier.docs.length;
            classifier = classifier.classifier.classTotals;
            //console.log(classifier);

            var size = this._size(classifier);
            //console.log(size);

            //var arrayOfKeys = [];

            var arrayOfData = [];

            Object.keys(classifier).forEach(function(key) {
                //arrayOfKeys.push(key);
                var holderPercentage = classifier[key] / totalEvents * 100;
                holderPercentage = Math.round(holderPercentage);
                arrayOfData.push({
                    label: key,
                    value: holderPercentage
                });
            });

            //console.log(arrayOfData);
            var Chart;

            if (self.props.type.toLowerCase() == 'pie') {
                Chart = rd3.PieChart;
            } else {
                Chart = rd3.Treemap;
            }

            return (
                <div>
                <Chart
                  data={arrayOfData}
                  width={400}
                  height={400}
                  radius={100}
                  innerRadius={20}
                  sectorBorderColor="white"
                  title={self.props.title}
                />            
                </div>
            );
        }

});


module.exports = DataGrapher;