---
title: "Motion Typo Hello"
date: 2017-09-18T01:07:49+09:00
draft: false
categories:
- "graphic"
tags:
- "javascript"
---

<p></p>

<span id="hello" style="font-size:100px"></span>

<script>
/**
 * 定数の宣言
 */

// setTimeoutの秒数（言葉が変化する時間）
var CHANGE_SPEED = 10;

// setTimeoutの秒数（インターバルの時間）
var INTERVAL_SPEED = 2000;

// アスキーコードのミニマムリミット
var MIN_ASCII_CODE = 48;

// アスキーコードのマックスリミット
var MAX_ASCII_CODE = 125;

// 表示する言葉
var TARGET_WORDS = new Array(
  "world",
  "tsujimitsu",
  "javascript",
  "art",
  "design",
  "motion",
  "typo",
  "graphic",
  "thank",
  "you",
  "very",
  "much"
);

// 表示する先（ID）
var DISPLAY_ID = "hello";


/**
 * インターバルを置く．次の文字列へセットする．
 *
 * @param 文字配列 currentWordAsciiCode(array), ナンバー targetWordNumber(int)
 * @return true
 *
 */
function interval(currentWordAsciiCode, targetWordNumber) {
  // 引数targetWordNumberがundefinedなら0を代入する
  if (targetWordNumber == undefined) {
    targetWordNumber = 0;

  // targetWordNumberが長さを超えた場合0に戻す
  } else if (targetWordNumber >= TARGET_WORDS.length) {
    targetWordNumber = 0;
  }

  var targetWordAsciiCode  = new Array();

  var targetWord = TARGET_WORDS[targetWordNumber];

  targetWordAsciiCode  = wordToAsciiCode(targetWord);

  currentWordAsciiCode = regulateArrayLength(currentWordAsciiCode, targetWordAsciiCode);

  wordMatch(currentWordAsciiCode, targetWordAsciiCode, targetWordNumber);

  return true;
}


/**
 * ワードをマッチさせる
 *
 * @param 文字配列 currentWordAsciiCode(array), 文字配列 targetWordAsciiCode(array), ナンバー targetWordNumber(int)
 * @return true
 *
 */
function wordMatch(currentWordAsciiCode, targetWordAsciiCode, targetWordNumber) {
  var resultMatchFlag = 1;

  for (i=0; i<currentWordAsciiCode.length; i++) {
    if (currentWordAsciiCode[i] != targetWordAsciiCode[i]) {

      resultMatchFlag = 0;
      if (currentWordAsciiCode[i] != MAX_ASCII_CODE) {
        currentWordAsciiCode[i]++;
      } else {
        currentWordAsciiCode[i] = MIN_ASCII_CODE;
      }
    }
  }

  // 言葉の表示
  document.getElementById(DISPLAY_ID).innerHTML = asciiCodeToWord(currentWordAsciiCode);

  if (resultMatchFlag) {
    targetWordNumber++;
    setTimeout(interval, INTERVAL_SPEED, currentWordAsciiCode, targetWordNumber);

  } else {
    setTimeout(wordMatch, CHANGE_SPEED, currentWordAsciiCode, targetWordAsciiCode, targetWordNumber);
  }

  return true;

}


/**
 * 引数にセットされた文字列をアスキーコードに変換後，配列に格納し返却．
 *
 * @param 文字列 word(string)
 * @return 処理結果配列データ asciiCode(array)
 *
 */
function wordToAsciiCode(word) {
  var asciiCode = new Array();
  var i = 0;

  for (i=0; i<word.length; i++) {
    asciiCode.push(word.charCodeAt(i));
  }

  return asciiCode;
}


/**
 * 引数にセットされた配列（アスキーコード）を文字列に変換後，変数に格納し返却．
 *
 * @param 配列 asciiCode(array)
 * @return 処理結果配列データ word(string)
 *
 */
function asciiCodeToWord(asciiCode) {
  var word = new String();
  var i = 0;

  for (i=0; i<asciiCode.length; i++) {
    word += String.fromCharCode(asciiCode[i]);
   }

  return word;
}


/**
 * 引数にセットされた配列の長さを比較し，差分の配列を返却．
 * 配列を伸ばす際は，アスキーコードの幅で任意の数字が代入される．
 *
 * @param 文字配列 currentWordAsciiCode(array), 文字配列 targetWordAsciiCode(array)
 * @return 文字配列 currentWordAsciiCode(array)
 *
 */
function regulateArrayLength(currentWordAsciiCode, targetWordAsciiCode) {
  var count = 0;
  var i = 0;

  if (currentWordAsciiCode.length > targetWordAsciiCode.length) {
    count = currentWordAsciiCode.length - targetWordAsciiCode.length;
    for(i=0; i<count; i++) {
      currentWordAsciiCode.pop();
    }

  } else if (targetWordAsciiCode.length > currentWordAsciiCode.length) {
    count = targetWordAsciiCode.length - currentWordAsciiCode.length;
    for(i=0; i<count; i++) {
      currentWordAsciiCode.push(parseInt(getRandomValue(MIN_ASCII_CODE, MAX_ASCII_CODE)));
    }
  }

  return currentWordAsciiCode;
}


/**
 * ランダムな数字を返却する．
 *
 * @param 最小値 min(int), 最大値 max(int)
 * @return ランダム値(float)
 *
 */
function getRandomValue(min, max) {
  return Math.random()*(max-min) + min;
}


// スタート
interval(wordToAsciiCode('a'));
</script>


