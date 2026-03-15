import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type Category = {
    #sneaker;
    #boot;
    #sandal;
  };

  type Product = {
    id : Nat;
    name : Text;
    category : Category;
    price : Nat;
    description : Text;
    sizes : [Nat];
  };

  let products = Map.empty<Nat, Product>();

  public shared ({ caller }) func init() : async () {
    if (products.size() > 0) { Runtime.trap("Products already initialized") };

    let sampleProducts : [Product] = [
      {
        id = 1;
        name = "AirMax Runner";
        category = #sneaker;
        price = 120;
        description = "Lightweight running sneakers";
        sizes = [38, 39, 40, 41, 42];
      },
      {
        id = 2;
        name = "Urban Hike";
        category = #boot;
        price = 150;
        description = "Durable waterproof boots";
        sizes = [40, 41, 42, 43, 44];
      },
      {
        id = 3;
        name = "Summer Breeze";
        category = #sandal;
        price = 60;
        description = "Comfortable summer sandals";
        sizes = [37, 38, 39, 40, 41];
      },
      {
        id = 4;
        name = "Classic High";
        category = #sneaker;
        price = 110;
        description = "Casual high-top sneakers";
        sizes = [39, 40, 41, 42, 43];
      },
      {
        id = 5;
        name = "Mountain Peak";
        category = #boot;
        price = 180;
        description = "Insulated winter boots";
        sizes = [41, 42, 43, 44, 45];
      },
      {
        id = 6;
        name = "Beach Walker";
        category = #sandal;
        price = 55;
        description = "Lightweight walking sandals";
        sizes = [36, 37, 38, 39, 40];
      },
    ];

    for (product in sampleProducts.values()) {
      products.add(product.id, product);
    };
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };

  public query ({ caller }) func getProductsByCategory(category : Category) : async [Product] {
    products.values().toArray().filter(
      func(p) { p.category == category }
    );
  };

  public query ({ caller }) func getProductById(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };
};
