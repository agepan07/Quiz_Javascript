//`問題を定義する
const quiz = [
	{question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
		answer: ['スーパーファミコン','プレイステーション２','ニンテンドースイッチ','ニンテンドーDS'
		],
		correct: 'ニンテンドーDS'},
	{question: '今の年号は次のうちどれ？',
		answer: ['平成','令和','昭和','大正'
		],
		correct: '令和'},
	{question: '光の三原色ではないものはどれ？',
		answer: ['赤','青','黄','緑'
		],
		correct: '黄'}
]
//問題数を算出するための変数を定義
const quizLength = quiz.length;
let quizIndex = 0;
//正解数を算出するための変数を定義する。
let score = 0;
//ボタンの名称とクリックした際の条件を設定するのに使用する定数を定義
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length
//以下処理内容
//問題文と選択肢を表示
const setQuiz = () => {
	//問題を表示
	console.log(document.getElementById('js-question1').textContent = quiz[quizIndex].question);
	//回答を表示
	let buttonIndex = 0;
	while(buttonIndex < buttonLength){
		$button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
	buttonIndex++;
	}
}
setQuiz();
//選択肢をクリックした際の結果を表示
const clickHandler = (e) => {
	if(quiz[quizIndex].correct === e.target.textContent){
		window.alert('正解!');
		score++;
	}else{
		window.alert('不正解...');
	}
	quizIndex++;
	//残りの問題数に応じてどのように処理するかの処理
	if(quizIndex < quizLength){
		//問題数があればこちらを実行
		setQuiz();
	}else{
		//問題数がなければこちらを実行
		window.alert('終了!あなたの正解数は' + quizLength + '問中' + score + '問！！！');
	}
}
//各ボタンに問題の正誤を設定する
let handlerIndex = 0;
while(handlerIndex < buttonLength){
	$button[handlerIndex].addEventListener('click', (e) => {
		clickHandler(e);
	});
	handlerIndex++;
}
