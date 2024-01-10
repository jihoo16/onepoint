<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>신청서 원 포인트(One Point) - 탑티어 프리랜서 마케팅 매칭 서비스</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.umd.js"></script>
	<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.css"
	/>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<link rel="icon" sizes="57x57" href="https://1point.kr/favicon/apple-icon-57x57.png">
	<link rel="stylesheet" href="css/applicationStyle01.css">
	<link rel="icon" href="img/m_h1_logo.png">
	<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
	/>

	<script src="js/applicationScript01.js"></script>
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
	<script src="js/jquery.mousewheel.js"></script>
	<script >
	function checkForm(){
		if(!document.newMember.name.value){
			alert("회사명을 입력하세요");
			return false;
		}
		if(!document.newMember.id.value){
			alert("아이디를 입력하세요");
			return false;
		}
		if(!document.newMember.pw.value){
			alert("비밀번호를 입력하세요");
			return false;
		}
		
		document.newMember.submit();
	}
</script>
</head>
<body>
	<div id="wrapper">
		<div class="header">
			<a href="index.jsp"><img src="img/h-logo.png" alt=""></a>
		<a href="index.jsp"><img src="img/close.png" alt="" class="close"></a>
		</div>
		<div class="section">
			<div class="sectionwrap">
				<div class="info">
					원포인트에 관심을 가져주셔서 감사합니다! <br>
					요청 사항을 더 잘 이해하기 위해 몇 가지 질문을 드리고자 합니다. <br>
					이미 신청한 이력이 있으신 분이라면 아래 로그인 버튼을 클릭해주세요. <br>
				</div>
				<h2>안녕하세요! 회사를 소개해주세요.</h2>
				<form name="newMember"class="needs-validation" novalidate action="processAddMember.jsp" method="post">
					<div class="form-row">
						<div class="col-md-12 mb-5">
							<label for="validationCustom01">회사명</label>
							<input type="text" class="form-control" id="validationCustom01" value="" required placeholder="ex) 원포인트" name="name">
							<div class="invalid-feedback">
								회사명을 입력해주세요.
							</div>
						</div>
						<div class="col-md-12 mb-5">
							<label for="validationCustom02">아이디</label>
							<input type="text" class="form-control" id="validationCustom02" value="" required placeholder="아이디@onepoint.com" name="id">
							<div class="invalid-feedback">
								아이디를 입력해주세요.
							</div>
						</div>
							<div class="col-md-12 mb-5">
							<label for="validationCustom06">비밀번호</label>
							<input type="password" class="form-control" id="validationCustom06" value="" required placeholder="비밀번호" name="pw">
							<div class="invalid-feedback">
								비밀번호
							</div>
						</div>
						<div class="col-md-12 mb-5">
							<label for="validationCustom05">전화번호</label>
							<input type="text" class="form-control" id="validationCustom05" value="" required placeholder="전화번호" name="phone">
							<div class="invalid-feedback">
								전화번호
							</div>
						</div>
						<div class="col-md-12 mb-5">
							<label for="validationCustom04">산업군</label>
							<select class="custom-select" id="validationCustom04" required name="category">
								<option selected value="">...</option>
								<option value="게임">게임</option>
								<option value="광고/마케팅">광고/마케팅</option>
								<option value="교육">교육</option>
								<option value="금융/보험/핀테크">금융/보험/핀테크</option>
								<option value="모빌리티/교통">모빌리티/교통</option>
								<option value="물류">물류</option>
								<option value="부동산/건설">부동산/건설</option>
								<option value="뷰티/화장품">뷰티/화장품</option>
								<option value="블록체인/딥테크">블록체인/딥테크</option>
								<option value="여행/레저">여행/레저</option>
								<option value="유아/출산">유아/출산</option>
								<option value="인사/비즈니스/법률">인사/비즈니스/법률</option>
								<option value="제조/하드웨어">제조/하드웨어</option>
								<option value="커머스">커머스</option>
								<option value="컨텐츠/예술">컨텐츠/예술</option>
								<option value="통신/보안/데이터/개발">통신/보안/데이터/개발</option>
								<option value="패션">패션</option>
								<option value="푸드/농업">푸드/농업</option>
								<option value="헬스케어/바이오">헬스케어/바이오</option>
								<option value="홈리빙/펫">홈리빙/펫</option>
								<option value="환경/에너지">환경/에너지</option>

							</select>
							<div class="invalid-feedback">
								필수값입니다.
							</div>
							
							
						</div>
					</div>
					<div class="form-row">
						
						
						<button class="btn btn-primary" type="submit" onclick="checkForm()">회원가입하기 →</button>
					</form>

					<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
						(function() {
							'use strict';
							window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
								var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
								var validation = Array.prototype.filter.call(forms, function(form) {
									form.addEventListener('submit', function(event) {
										if (form.checkValidity() === false) {
											event.preventDefault();
											event.stopPropagation();
										}
										form.classList.add('was-validated');
									}, false);
								});
							}, false);
						})();
					</script>
				</div>
				<a href="login.jsp" class="join">이미 가입하셨나요? <span>로그인하기</span></a>
			</div>

		</div>

		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

	</body>
	</html>