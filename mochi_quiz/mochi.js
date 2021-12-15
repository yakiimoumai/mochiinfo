////JSONP
/* レベルの分類
    1:もちの名前
    2:地名
    3:日時
    4:材料
    5:起源、歴史
    6:調理
filter参考
    https://qiita.com/1mada/items/9a48f7053a6016b5fd5a
*/



$(function(){ /* $(function() start $(function()はHTMLを読み終わった後に実行　https://webkaru.net/jquery/ready-function/ */
    	// 国旗データを読み込む
    	// function getFlagData() {
    	// 	return $.getJSON("flag.json", function(data){});
    	// }
      // 難易度 デフォルト////どうやって持ってくる？

    var level = "1";/* デフォルトレベル */
    console.log("toggle hide");

    /* レベル選択_start */
    $("#level dd").click(function(){
      $("#level dd").hide();
      console.log("toggle hide");

      console.log("あああ_レベル選択",level);/* ここで一応レベルは取れている */
    });/* レベル選択_end */




console.log("mo-test",mo);
console.log("mo.mochi-test",mo.mochi);

/* callback ここから繰り返す */
function mochicallback(mo){ //function mochicallback(mo) start



/* レベル振り分け_start*/
console.log("ここでもわかる？_レベル選択",level);/* ここで一応レベルは取れている */


/* レベル振り分け_end*/
      //とにかくjsonデータが順番に入って来ている
      console.log("test03");
      console.log("mo.mochi.length : ",mo.mochi.length);

      console.log("test04-level");
      console.log("level : ",level);

      //最初説明は隠す
      document.getElementById("question").style.display ="block";
      document.getElementById("explain").style.display ="none";



//全部のJSONを回るので、ここでフィルターにかける

       			// 難易度調整 全てのもちデータから該当難易度のもちデータのみ抽出
            //何してるかわからん>>分かった＞このあとにデータをランダムに選ばないといけない

       			if (level == "2") {//もしレベル2だったら
                  data = mo.mochi.filter(function(v){
					console.log("ああああv.level 2------------",v.level);
					console.log("ああああv.level 2------------",v.level);
					console.log("this_array id",mo.mochi[i]["id"]);
					return v.level == level;//この関数にlevelを代入
     				});
       			} else if (level == "3") {
					data = mo.mochi.filter(function(v){
					console.log("ああああv.level 3------------",v.level);
					return v.level == level;
       				});
       			}else if (level == "4") {
					data = mo.mochi.filter(function(v){
					console.log("ああああv.level 4------------",v.level);
					return v.level == level;
       				});
       			}else if (level == "5") {
					data = mo.mochi.filter(function(v){
					console.log("ああああv.level 5------------",v.level);
					return v.level == level;
       				});
	            }else if (level == "6") {
		            data = mo.mochi.filter(function(v){
	                console.log("ああああv.level 6------------",v.level);
	       			return v.level == level;
       				});
       			} else {
               data = mo.mochi.filter(function(v){
					console.log("level----level");
					console.log("level : ",level);
					//return level == "1";
					return v.level == level;
       				});
       			}

            console.log("level1----");
            console.log("level : ",level);

            console.log("data--何入っとる？",data);
            console.log("data--長さ？",data.length);//取れてた！
            console.log("data--1？",data[1]);

            //データの一覧を見たい//確認用
            for(i=0;i<data.length;i++){
              console.log("data一覧",data[i]);
            }
            //console.log("rand1---- : ",mo.mochi[q]["level"]);



//ここからはフィルター後のデータ？
      // もちをランダムに一つ選択する

      var q = Math.floor(Math.random() * data.length);////q
      console.log("data.length test: ",data.length);

      //選択したレベルのものだけで回す>>>どうやって
      var level_test = data[q]["id"];
      console.log("level_test 今選ばれているid :",level_test);

      // もちを表示//これをフィルターの中に
      $("#flag").html('<img src="mochi_jpg/mochi' + data[q]["id"] + '.jpg" />');

      var c = data[q]["id"];
      console.log("c :",c);//今選ばれているid

      console.log("qqqqqq: ",data[q]["quiz"]);

      var now_quizz = "";
      now_quizz = data[q]["quiz"];

      var quiz_txt = document.getElementById("quizz");
      quiz_txt.innerHTML = now_quizz;


//var rand = 0;
 			// 国旗データをシャッフルする
 			var a = [];
      var a_push = [];

 			for (i = data.length - 1; i >= 0; i--) {
 				// 0~iのランダムな数値を取得
 				var rand = Math.floor(Math.random() * (i+1));
 				// 配列の数値を入れ替える
 				[data[i], data[rand]] = [data[rand], data[i]]
         //console.log("mo.mochi[rand] test: ",mo.mochi[rand]);

         var rand_array = a_push.push(data[rand]);
         console.log("rand_arrayyyyyy",c);//この周期で選ばれた番号
         console.log("(data[rand]",data[rand])

        console.log("levellllllllllllll",level);
 			}

			//今回のレベルに一致するものを抜き出す
 			// シャッフルした国旗データから先頭の3つを取得
 			for (i = 0; i < 3; i++) {
 				   a.push(data[i]);
 				   console.log("かくにん>>",data[i]);
 			}

 			// 正解が含まれているか確認し、選択肢を4つにする
 			var d = false;
 			for (i = 0; i < a.length; i++) {
 				console.log("かくにん2>>",a.length);
 				if(a[i]["id"] == c) {////idがないっていってる


					d = true;
					console.log("select true");
					console.log(c);
 				}
        	console.log("a test2: ",a);
 			}

 			// 含まれていればランダムに一つ追加
 			if (d == true) {
        //a.push(mo.mochi[3]);
        a.push(data[3]);

 			// 含まれていなければ正解を追加
       //console.log("mo.mochi[3] test: ",mo.mochi[3])
       console.log("data[3] test: ",data[3]);

 			} else {
        for (i = 0; i < data.length; i++) {

         console.log("data.length test :",data.length);


          if (data[i]["id"] == c) {
            a.push(data[i]);
             //console.log("data[i] test1:",data[i]);
 					}
           //console.log("data[i] test2:",data[i]);
 				}
 			}

 			// 選択肢をシャッフルする
 			for (i = a.length - 1; i >= 0; i--) {
 				// 0~iのランダムな数値を取得
 				var rand = Math.floor(Math.random() * (i+1));
         console.log("rand a.length: ",a.length);
         console.log("rand test: ",rand);

 				// 配列の数値を入れ替える
 				[a[i], a[rand]] = [a[rand], a[i]];
        console.log("a[i]: ",a[i]);
        console.log("a[rand]: ",a[rand]);
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
          //console.log("explain mo.mochi[q]["id"]: ",mo.mochi[q]["id"]);

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
          var newLine = mo.mochi.filter(function(item,index){
            if(item.id == c){
              console.log("newLine info: ",item.info);
              now_info = item.info;
              // console.log("now info: ",now_info);
              return true;
            }
          });
			console.log("newLine : ",newLine);
			console.log("now info: ",now_info);
			var explain_txt = document.getElementById("explain_txt");
			explain_txt.innerHTML = now_info;

             //var c = mo.mochi[q]["id"];
            console.log("explain c:",c);
            console.log("explain q:",q);
            console.log("ex---- txt:",mo.mochi[0]["info"]);

            $("#explain_next a").on("click", function(){
              //中身を空に
              $("#answer").empty();
              $("explain_photo").empty();
              $("explain_txt").empty();
              $("#level a").off("click");


              mochicallback(mo);
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
 			$("#level a").on("click", function(){//level選択start
			console.log("this.id--------",this.id);

 	switch(this.id) {
		case 'level1':
			level = "1";
			$("#level1").addClass("active");
			$("#level2").removeClass("active");
			$("#level3").removeClass("active");
            $("#level4").removeClass("active");
            $("#level5").removeClass("active");
            $("#level6").removeClass("active");
			console.log("level 1 いいいいいいいいいい");
			break;
		case 'level2':
			level = "2";
			$("#level2").addClass("active");
			$("#level1").removeClass("active");
			$("#level3").removeClass("active");
            $("#level4").removeClass("active");
            $("#level5").removeClass("active");
            $("#level6").removeClass("active");
			console.log("level 2 いいいいいいいいいい");
			break;

		case 'level3':
			level = "3";
			$("#level3").addClass("active");
			$("#level1").removeClass("active");
			$("#level2").removeClass("active");
			$("#level4").removeClass("active");
			$("#level5").removeClass("active");
			$("#level6").removeClass("active");
			console.log("level 3 いいいいいいいいいい");
 			break;

        case 'level4':
              level = "4";
              $("#level4").addClass("active");
              $("#level1").removeClass("active");
              $("#level2").removeClass("active");
              $("#level3").removeClass("active");
              $("#level5").removeClass("active");
              $("#level6").removeClass("active");
              console.log("level 4 いいいいいいいいいい");
              break;

        case 'level5':
              level = "5";
              $("#level5").addClass("active");
              $("#level1").removeClass("active");
              $("#level2").removeClass("active");
              $("#level3").removeClass("active");
              $("#level4").removeClass("active");
              $("#level6").removeClass("active");
              console.log("level 5 いいいいいいいいいい");
            break;

       　case 'level6':
              level = "6";
              $("#level6").addClass("active");
              $("#level1").removeClass("active");
              $("#level2").removeClass("active");
              $("#level3").removeClass("active");
              $("#level4").removeClass("active");
              $("#level5").removeClass("active");
              console.log("level 6 いいいいいいいいいい");
              break;
		default:
			level = "1111";
			break;
 				}

 				$("#answer").empty();
 				$("#level a").off("click");  // イベントをオフにしないと何度もクリックイベントが実行されるので要注意
 				//drawFlag(level);
        mochicallback(mo);
 			});//level選択end




  }//function mochicallback(mo) end



//drawFlag(level);
mochicallback(mo);

console.log("test04");

	//drawFlag(level);

	/* 難易度メニュー トグル 動きだけ */
	$("#level dd").hide();
	$("#level dt").click(function(){
		$("#level").children("dd").slideToggle("fast");
    console.log("toggle fast");
    console.log("あああ",level);
	});



});/* $(function() start */
