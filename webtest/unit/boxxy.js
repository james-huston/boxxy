
describe("Boxxy Tests", function() {
    beforeEach(function(done) {
        $("#playground").html('');
        $("<div>", {
            id: "blargme"
        }).appendTo($("#playground"));
        done();
    });

    afterEach(function(done) {
        $("#playground").html('');
        done();
    });

    describe("Setup Tests", function() {
        it("should have a div in the body", function() {
            expect($("#playground div")).to.have.length(1);
        });

        it("should have 1 div with and id of blarg", function() {
            expect($("#blargme")).to.have.length(1);
        });
    });

    describe("Simple Apply Content Test", function() {
        it("should start with no div or span content", function() {
            expect($("#blargme div")).to.have.length(0);
            expect($("#blargme span")).to.have.length(0);
        });

        it("should add two divs to the data", function() {
            $("#blargme").boxxy();
            expect($("#blargme div")).to.have.length(2);
        });

        it("Should create a header div", function() {
            $("#blargme").boxxy();
            expect($("#blargme div.boxxy-header")).to.have.length(1);
        });

        it("Should create a content div", function() {
            $("#blargme").boxxy();
            expect($("#blargme div.boxxy-content")).to.have.length(1);
        });

        it("should add one span to the data", function() {
            $("#blargme").boxxy();
            expect($("#blargme span")).to.have.length(1);
        });
    });

    describe("Apply with text content", function() {
        it("should start with simple content", function() {
            $("#blargme").html('this is a test');
            expect($("#blargme").html()).to.be('this is a test');
        });

        it("should keep the content in main div", function() {
            $("#blargme").html('this is a test');
            $("#blargme").boxxy();
            expect($("#blargme div.boxxy-content").html()).to.be("this is a test");
        });
    });

});

