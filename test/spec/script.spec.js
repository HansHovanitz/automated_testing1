describe("Dummy Test", function() {
	it("dummy spec to test karma with 2+2=4", function() {
		expect(2+2).toEqual(4)
	})
});

describe("OrderFormController", function() {

	var services;
	var controller;
	var $scope;
	var $controller;

	beforeEach(module("myApp"));

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	beforeEach(function() {
		services = [
			{
				name: 'Web Development',
				price: 300,
				active:true
			},{
				name: 'Design',
				price: 400,
				active:false
			},{
				name: 'Testing',
				price: 250,
				active:false
			},{
				name: 'Training',
				price: 220,
				active:false
			}
	        ,{
	    		name: 'Training2',
				price: 220,
				active:false
			}
		];
	});

	describe("$scope.total", function() {

		beforeEach(function() {
			$scope = {};
			controller = $controller("OrderFormController", { $scope: $scope});
		});

		it("method should exist", function() {
			expect($scope.total).toBeDefined();	
		});

		it("total price should be correct at start", function() {
			var total = $scope.total();
			expect(total).toEqual(300);
		});

		it("total price should be correct if nothing is selected", function() {
			$scope.toggleActive($scope.services[0]);
			var total = $scope.total();
			expect(total).toEqual(0);
		});

		it("total price should be correct", function() {
			$scope.toggleActive($scope.services[0]);
			$scope.toggleActive($scope.services[1]);
			$scope.toggleActive($scope.services[3]);
			$scope.toggleActive($scope.services[4]);
			var total = $scope.total();
			expect(total).toEqual(840);
		});
	});

	describe("$scope.toggleActive", function() {

		beforeEach(function() {
			$scope = {};
			controller = $controller("OrderFormController", { $scope: $scope});
		});

		it("method should exist", function() {
			expect($scope.toggleActive).toBeDefined();
		});

		it("toggle selection from inactive to active", function() {
			$scope.toggleActive(services[0]);
			expect(services[0].active).toEqual(false);
		});

		it("toggle selection from active to inactive", function() {
			$scope.toggleActive(services[1]);
			expect(services[1].active).toEqual(true);
		});
	});

	describe("$scope.services", function() {

		beforeEach(function() {
			$scope = {};
			controller = $controller("OrderFormController", { $scope: $scope});
		});

		it("services should exist", function() {
			expect($scope.services).toBeDefined();
		});

		it("services list should contain a service object", function() {
			expect($scope.services[0]).toEqual(services[0]);
		});

		it("services should be a list of service objects", function() {
			expect($scope.services).toEqual(services);
		});
	});
});
