module PostsQueryConfig = [%graphql
  {|
  query PostsQuery {
    posts {
      id
      title
      content
      published
    }
  }
|}
];

module PostsQuery = ReasonApolloHooks.Query.Make(PostsQueryConfig);

[@react.component]
let make = () => {
  /* Both variant and records available */
  let (simple, _full) = PostsQuery.use();

  <div>
    {
      switch (simple) {
      | Loading => <p> {React.string("Loading...")} </p>
      | Data(data) =>
        Js.log(data);
        <p>
          {
            React.string("data found in query request, logged to the console.")
          }
        </p>;
      | NoData =>
        Js.log("no data");
        <p> {React.string("no data in query request")} </p>;
      | Error(error) =>
        Js.log(error);
        <p> {React.string("error in query request")} </p>;
      }
    }
  </div>;
};