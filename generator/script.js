
		$(document).ready(function() {

			// list one content
			var one = [
				"cute",
				"beautiful",
				"kind",
				"sweet",
				"open",
				"thoughtful",
				"generous",
				"soft",
				"round",
				"lovely",
				"small",
				"joyful",
				"angelic",
				"gentle",
				"pleasant",
			];

			// list two content
			var two = [
				"bunny",
				"bear",
				"cat",
				"dog",
				"elephant",
				"butterfly",
				"squirrel",
				"hamster",
				"bird",
				"fox",
				"koala",
				"llama",
				"sheep",
				"whale",
				"miffy",
			];
            
            // list three content
			var three = [
				"lovely",
				"wonderful",
				"spectacular",
				"mindblowing",
                "delightful",
				"fantastic",
				"fabulous",
				"sensational",
                "brilliant",
				"yummyful",
				"terrific",
                "great",
				"good",
				"cheerful"
			];
            

			// This is a very common randomizing function.
			// It takes a list (array) and returns one at random.
			function select_random(x){
				y = x[Math.floor(Math.random()*x.length)];
				return y;
			}

			function generate(){

				// Select a random item from each list
				var selected_one = select_random(one);
				var selected_two = select_random(two);
                var selected_three = select_random(three);

				// Take the selected (random) item from list and make it visible
				$('.list-one').html(selected_one);
				$('.list-two').html(selected_two);
                $('.list-three').html(selected_three);

			}

			$('button').click(function(){
				generate();
			});

			generate();
			
		});