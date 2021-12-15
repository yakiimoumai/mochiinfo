////JSONP
var dee = {
  "de":[
{
	"id":"001",
	"name":"丸もち",
  "quiz":"丸もちは日本のどの辺りでよく食べられている？",
  "ans":"西日本",
	"level":"1",
  "info":"関西地方のお雑煮は白味噌仕立てです。東日本と近畿を除く西日本では圧倒的にすまし汁仕立て。"
},{
	"id":"002",
	"name":"角もち",
  "quiz":"東日本ではなぜ角もちが食べられるようになったか？",
  "ans":"のして切るだけなので便利。",
	"level":"1",
  "info":"切り餅はのし餅を作って、切るだけなので便利。他の由来：「敵をのす」という意味でのし餅が使われるようになった。人口の多い江戸では家も狭く、手早く大量に作るために、のし餅を作り一気に切って角餅にしたともいわれている。"
},{
	"id":"003",
	"name":"大福餅",
  "quiz":"大福餅にはたくさんの名前があるが、最初の頃はなんと呼ばれていたか？",
  "ans":"うずら餅",
	"level":"1",
  "info":"江戸時代初期に生まれた鶉餅（うずらもち）が1771年（明和8年）に江戸・小石川の未亡人により小形化され、餡に砂糖を加えられたものが始まりとされる。腹持ちがよいことから腹太餅（はらぶともち）、大腹餅（だいふくもち）の名で大いに広まった。[wikipedia]"
},{
	"id":"004",
	"name":"草餅",
  "quiz":"草餅にはよもぎ以外に使われている草がある、その名前は？",
  "ans":"母子草（ははこぐさ）",
	"level":"1",
  "info":"現代では草餅入っている草は主に蓬（よもぎ）だが、昔は母子草（春の七草のゴギョウ）で作られ、草餅でなく母子餅とよばれていた。草の香りには邪気を祓う力があると信じ、上巳の節句に黍麹草（鼠麹草、母子草）を混ぜ込んだ餅を食べる風習が、中国より伝わったとされ、平安時代には宮中行事の一つとして定着していた。[wikipedia]"
},{
	"id":"005",
	"name":"桜餅",
  "quiz":"関西風の桜餅は別名何と呼ばれているか？",
  "ans":"道明寺餅",
	"level":"1",
  "info":"関西で作られている桜餅。道明寺餅または略して道明寺（どうみょうじ）ともいう。関西では関東風の桜餅を見ることはほとんどなく、桜餅といえば関西風の道明寺餅のことを指す[wikipedia]。道明寺粉を蒸し、あんを包んで桜の葉で包んで作る。"
},{
	"id":"006",
	"name":"亥の子餅",
  "quiz":"亥の子餅はいつ食べる餅？",
  "ans":"旧暦10月最初の亥の日",
	"level":"1",
  "info":"亥の子（旧暦10月（亥の月）の亥の日）の亥の刻（午後10時ごろ）に食べる。"
},{
	"id":"007",
	"name":"五平餅",
  "quiz":"五平餅の起源は？",
  "ans":"「山の講」のお供え説、山の保存食説、五平さん説",
	"level":"1",
  "info":"山の講とは、山の神様をお祭りする行事。山の仕事の携帯用、保存用、炭焼きなどの窯を作った際に窯の前に供えたとする説。五平さんは農民、きこり、炭焼き、荷稼ぎだったなど多くの説がある[とよた五平餅]。"
},{
	"id":"008",
	"name":"ワラビモチ",
  "quiz":"わらびもちは何からできているか？",
  "ans":"蕨の地下茎のデンプン、水、砂糖",
	"level":"1",
  "info":"蕨の根のデンプンは現在は高級わらびもちに使われ、普段のわらびもちには甘藷でデンプン、タピオカなどが使われることが多い。"
}
]
};
console.log("test01");


$(function(){ /* $(function() start */
    	// 国旗データを読み込む
    	// function getFlagData() {
    	// 	return $.getJSON("flag.json", function(data){});
    	// }
      // 難易度 デフォルト
      var level = "1";

  //callback
  function mochicallback(dee){ //function mochicallback(dee) start
      //とにかくデータが入って来ている
      console.log("test03");
 			//console.log("data.length : ",data.length);
      console.log("dee.de.length : ",dee.de.length);

       //最初説明は隠す
       document.getElementById("question").style.display ="block";
       document.getElementById("explain").style.display ="none";

 			// 難易度調整 国旗データから該当の難易度のみ抽出
 			if (level == "2") {
          data = dee.de.filter(function(v){
   				return v.level == level || v.level == "1";
   				});
 			} else if (level == "3") {
         data = dee.de.filter(function(v){
 					return v.level == level || v.level == "2";
 				});
 			} else {
         data = dee.de.filter(function(v){
 					return v.level == "1";
 				});
 			}

 			// 国旗をランダムに一つ選択する（正解）
 			var q = Math.floor(Math.random() * dee.de.length);
      console.log("dee.de.length test: ",dee.de.length);

 			// 国旗を表示
 			$("#flag").html('<img src="mochi_jpg/mochi' + dee.de[q]["id"] + '.jpg" />');
      var c = dee.de[q]["id"];
      console.log("c :",c);

      //console.log("qqqqqq: ",item.quiz);
      console.log("qqqqqq: ",dee.de[q]["quiz"]);
      var now_quizz = "";
      now_quizz = dee.de[q]["quiz"];


      var quiz_txt = document.getElementById("quizz");
      quiz_txt.innerHTML = now_quizz;

 			// 国旗データをシャッフルする
 			var a = [];
 			for (i = dee.de.length - 1; i >= 0; i--) {
         //console.log("i :",i);
 				// 0~iのランダムな数値を取得
 				var rand = Math.floor(Math.random() * (i+1));
         //console.log("rand :",rand);
 				// 配列の数値を入れ替える
 				[dee.de[i], dee.de[rand]] = [dee.de[rand], dee.de[i]]
         //console.log("dee.de[rand] test: ",dee.de[rand]);
 			}

 			// シャッフルした国旗データから先頭の3つを取得
 			for (i = 0; i < 3; i++) {
 				//a.push(data[i]);
        a.push(dee.de[i]);
         console.log("dee.de[i] test1: ",dee.de[i]);
         console.log("a test1: ",a);
 			}

 			// 正解が含まれているか確認し、選択肢を4つにする
 			var d = false;
 			for (i = 0; i < a.length; i++) {
 				if (a[i]["id"] == c) {
 					d = true;
           console.log("select true");
 				}
        console.log("a test2: ",a);
 			}
 			// 含まれていればランダムに一つ追加
 			if (d == true) {
        a.push(dee.de[3]);

 			// 含まれていなければ正解を追加
       console.log("dee.de[3] test: ",dee.de[3])
 			} else {
        for (i = 0; i < dee.de.length; i++) {
         console.log("dee.de.length test :",dee.de.length);
          if (dee.de[i]["id"] == c) {
            a.push(dee.de[i]);
             //console.log("data[i] test1:",data[i]);
 					}
           //console.log("data[i] test2:",data[i]);
 				}
 			}

 			// 選択肢をシャッフルする
 			for (i = a.length - 1; i >= 0; i--) {
 				// 0~iのランダムな数値を取得
 				var rand = Math.floor(Math.random() * (i+1));
         console.log("rand test: ",rand);

 				// 配列の数値を入れ替える
 				[a[i], a[rand]] = [a[rand], a[i]]
 			}

 			// 選択肢を表示
 			for (i = 0; i < a.length; i++) {
 				$("#answer").append('<li id="li' + (i+1) + '"><a id="' + a[i]["id"] + '" href="#">' + a[i]["ans"] + '</a></li>');

         console.log("i img test: ",i);
         console.log("a.length02 :",a.length);
 			}

///////////////操作した時の
 			// 回答を選択時の処理
 			$("#answer a").on("click", function(){

 				// 正解すると次の問題へ
 				if (this.id == c) {
 					// 効果音
 					var audio_o = new Audio("img/audio_o.mp3");
 					audio_o.play();

 					// ボタン変更
 					$(this).css("background","url(img/answer_o.png) no-repeat center");
 					$(this).css("background-size","contain");

          console.log("seikai cccc : ",c);
          //console.log("explain dee.de[q]["id"]: ",dee.de[q]["id"]);

 					// 少し時間を置いてから実行
 					setTimeout(function(){
 						$("#answer").empty();
 						$("#level a").off("click");  // イベントをオフにしないと何度もクリックイベントが実行されるので要注意
            document.getElementById("question").style.display ="none";
            document.getElementById("explain").style.display ="block";
 					}, 250);
           console.log("seikai c test: ",c);




           //解説画像表示

            $("#explain_photo").html('<img src="mochi_jpg/mochi' + c +'_02.jpg" />');

          //解説文表示
          //idがexplain_txtのところに、infoを入れる
          var now_info = "";
          var newLine = dee.de.filter(function(item,index){
            if(item.id == c){
              console.log("newLine info: ",item.info);

              now_info = item.info;
              // console.log("now info: ",now_info);
              return true;
            }
          });
          console.log("newLine : ",newLine);
          console.log("now info: ",now_info)
             var explain_txt = document.getElementById("explain_txt");
             explain_txt.innerHTML = now_info;

             //var c = dee.de[q]["id"];
            console.log("explain c:",c);
            console.log("explain q:",q);
            console.log("ex---- txt:",dee.de[0]["info"]);


            $("#explain_next a").on("click", function(){
              //中身を空に
              $("#answer").empty();
              $("explain_photo").empty();
              $("explain_txt").empty();

   						$("#level a").off("click");


              mochicallback(dee);
            });




 				// 不正解だと選択肢を削る
 				} else {
 					// 効果音
 					var audio_x = new Audio("img/audio_x.mp3");
 					audio_x.play();

 					// ボタン変更
 					$(this).css("background","url(img/answer_x.png) no-repeat center");
 					$(this).css("background-size","contain");


           console.log("fuseikai c test: ",c);
 				}
 			});

 			// レベル選択
 			$("#level a").on("click", function(){
 				switch(this.id) {
 					case 'level1':
 						level = "1";
 						$("#level1").addClass("active");
 						$("#level2").removeClass("active");
 						$("#level3").removeClass("active");
 						break;
 					case 'level2':
 						level = "2";
 						$("#level2").addClass("active");
 						$("#level1").removeClass("active");
 						$("#level3").removeClass("active");
 						break;
 					case 'level3':
 						level = "3";
 						$("#level3").addClass("active");
 						$("#level1").removeClass("active");
 						$("#level2").removeClass("active");
 						break;
 					default:
 						level = "1";
 						break;
 				}

 				$("#answer").empty();
 				$("#level a").off("click");  // イベントをオフにしないと何度もクリックイベントが実行されるので要注意
 				//drawFlag(level);
        mochicallback(dee);
 			});
  }//function mochicallback(dee) end



//drawFlag(level);
mochicallback(dee);

console.log("test04");

	//drawFlag(level);

	// 難易度メニュー トグル
	$("#level dd").hide();
	$("#level dt").click(function(){
		$("#level").children("dd").slideToggle("fast");
	});
	$("#level dd").click(function(){
		$("#level dd").hide();
	});

});/* $(function() start */
