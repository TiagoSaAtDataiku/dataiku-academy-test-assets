function searchSubmit() {
  var searchVal = $('.catalog-search-input').val();
  if (searchVal.length) {
    window.location.href = '/?q=' + encodeURIComponent(searchVal);
  }
}
// Remove event listeners
$('.catalog-search-input, .catalog-search-input-button').off();
// Add onEnter to input
$('.catalog-search-input').on('keyup', function(e) {
  if (e.keyCode === 13) {
    searchSubmit();
  }
});

// Add onClick to search button
$('.catalog-search-input-button').on('click', function() {
  searchSubmit();
});

// Start Progress Bar Optional Lessons
$(document).ready(function() {
    $('#skilljar-content').attr('role', 'main');
    $('#lp-content').attr('role', 'main');
    $( '<li><a href="https://profile.dataiku.com/profile" class="sj-text-dataiku-profile focus-link-v2" tabindex="-1"><span>Dataiku Profile</span></a> </li>' ).insertBefore('#header-drop li:last-child');
    if ($('.sj-page-profile').length) {
        $( '<div class="input-wrapper read-only"><div class="input-label"></div><a href="https://profile.dataiku.com/profile">Edit your Dataiku profile</a></div>' ).insertAfter('.sj-text-input-label-authorized-via');
    }
    if ($('.sj-page-curriculum').length) {
        var totalLessons = $('#curriculum-list > a').length;
        var completedLessons = $('a.lesson-complete').length;
        var percentComplete = Math.round(completedLessons / totalLessons * 100);
        $('.sj-text-x-of-y-lessons-completed > span').text(completedLessons + ' of ' + totalLessons + ' lessons completed (' + percentComplete + '%)'
        );
        $('.progress-bar-inner').css('width', percentComplete + '%');
    }

    //Localize Japanese pages
    if ($('#main-container').attr( "data-catalog-page" ) == "ja" || $('#main-container').attr( "data-path" ) == "mlops-ja" ||$('#main-container').attr( "data-catalog-page" ) == "ja-learning-paths" || $('#main-container').attr( "data-catalog-page" ) == "ja-quick-start-programs" || $('#main-container').attr( "data-catalog-page" ) == "ja-certifications" || $('#main-container').attr( "data-path" ) == "ja-core-designer" || $('#main-container').attr( "data-path" ) == "ja-ml-practitioner" || $('#main-container').attr( "data-path" ) == "ja-advanced-designer" || $('#main-container').attr( "data-course" ) == "business-analyst-quick-start-ja" || $('#main-container').attr( "data-course" ) == "excel-to-dataiku-dss-quick-start-ja" || $('#main-container').attr( "data-course" ) == "core-designer-certificate-japanese" || $('#main-container').attr( "data-course" ) == "advanced-designer-certificate-japanese" || $('#main-container').attr( "data-course" ) == "mlops-certificate-ja" || $('#main-container').attr( "data-course" ) == "ml-practitioner-certificate-japanese" || $('#main-container').attr( "data-course" ) == "variables-101-ja" || $('#main-container').attr( "data-course" ) == "visual-recipes-102-ja" || $('#main-container').attr( "data-course" ) == "plugin-store-ja" || $('#main-container').attr( "data-course" ) == "flow-views-actions-ja" || $('#main-container').attr( "data-course" ) == "automation-ja" ) {
      $('.sj-text-sign-in span').text("ログイン");
      $(".sj-text-my-profile span").text("アカデミープロフィール");
      $(".sj-text-dataiku-profile span").text("Dataikuプロフィール");
      $(".purchase-button.free span").text("登録する");
      $(".sj-text-already-purchased span").text("既に登録済みですか？");
      $(".signout-link span").text("ログアウト");
      $("#dp-details h3").text("このコースについて");
      $(".sj-curriculum-wrapper h3").text("カリキュラムについて");
      $('a[href$="https://knowledge.dataiku.com"]').attr("href","https://knowledge.dataiku.com/jp/8.0/");
      $('a[href$="https://academy.dataiku.com/"]').attr("href","https://academy.dataiku.com/page/ja/");
      $('a.nav-board[href$="https://academy.dataiku.com/page/learning-paths"]').text("ラーニングパス").attr("href","https://academy.dataiku.com/page/ja-learning-paths");
      $('a.nav-board[href$="https://academy.dataiku.com/page/quick-start-programs"]').text("クイックスタート").attr("href","https://academy.dataiku.com/page/ja-quick-start-programs");
      $('a.nav-board[href$="https://academy.dataiku.com/page/certifications"]').text("認定").attr("href","https://academy.dataiku.com/page/ja-certifications");
      $('ul.secondary-nav li:first-of-type ul').prepend("<li class='depth2'><a class='nav-board' href='https://community.dataiku.com/t5/Japan-User-Group/gh-p/Japan-user_group' target='_blank' rel='noopener'>ユーザグループ</a></li>");
      $('.catalog-search-input').attr("placeholder","検索");
      $("html").attr("lang", "ja");
    }
//});
//<!-- End Progress Bar Optional Lessons -->

//<!-- START Add "Required" to Curriculum List for Non-Optional Lessons -->
    //$(document).ready(function () {
        $('.sj-page-curriculum .lesson-row .title:not(:has(".optional-text")) .sj-lesson-time').after("<span class='sj-lesson-required'>(Required)</span>");
    });
// END Add "Required" to Curriculum List for Non-Optional Lessons