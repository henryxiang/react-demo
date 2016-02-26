const Header = ({title}) => ( <div className="page-header"><h1>{title}</h1></div> );

var ArticleView = React.createClass({
  
  render: function() {
    const {article, onValueChange, onSave, onEdit, onDelete, onReturn} = this.props;
    if ( this.props.editMode ) {
      return ( 
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{article.title}</h3>
          </div>
          <div className="panel-body">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Title:</th>
                  <td><input id="title" onChange={onValueChange} ref="title" defaultValue={article.title} /></td>
                </tr>
                <tr>
                  <th>Body:</th>
                  <td><textarea id="body" onChange={onValueChange} ref="body" rows="5" cols="60" defaultValue={article.body} /></td>
                </tr>
                <tr>
                  <th>ID:</th>
                  <td>{article._id?article._id:"(new)"}</td>
                </tr>
                <tr>
                  <th>Create Date:</th>
                  <td>{article.articleDate.toString()}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <button type="button" className="btn btn-m btn-primary" onClick={onSave}>Save</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" className="btn btn-m btn-default"  onClick={onReturn}>Return</button>
            </div>
          </div>
        </div> );
    } else {
      return ( 
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{article.title}</h3>
          </div>
          <div className="panel-body">
            <table className="table table-striped"><tbody>
              <tr><th>Body:</th><td>{article.body}</td></tr>
              <tr><th>ID:</th><td>{article._id?article._id:"(new)"}</td></tr>
              <tr><th>Create Date:</th><td>{article.articleDate.toString()}</td></tr>
            </tbody></table>
            <div align="center">
              <button type="button" className="btn btn-m btn-primary" onClick={onEdit}>Edit</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" className="btn btn-m btn-danger" onClick={onDelete}>Delete</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" className="btn btn-m btn-default"  onClick={onReturn}>Return</button>
            </div>
          </div>
        </div> );
    }
  }  
});


var ArticleRow = React.createClass({
                   
  onClick: function() {
    this.props.onClick( this.props.article._id );
  },

  render: function() {
    return (
      <tr onClick={this.onClick}><td>{this.props.article.title}</td></tr>
    );
  }
});
               
var ArticleList = React.createClass({    
                             
  render: function() {
    return ( <div>
      <table className="table table-striped"><tbody>
        {this.props.articles.map( (article,i) => ( 
          <ArticleRow key={article._id} article={article} onClick={this.props.onClickArticle} /> 
           ))}
      </tbody></table>
    </div>
           );
  }
});

ArticleList.PropTypes = {
    articles : React.PropTypes.array.isRequired,
    onClickArticle : React.PropTypes.func.isRequired
};
                             
class App extends React.Component {

    state = {
      title : "Knowledge Base",
      viewMode : "list",
      currentArticle : null,
      articles : [
        {
          _id : _.uniqueId(),
          title : "Article One",
          body : "Main article body - could be very long",
          viewCount : 0,
          articleDate : new Date(),
          keywords : [ "keyword1", "keyword2", "keyword3" ]
        },
        {
          _id : _.uniqueId(),
          title : "Article Two",
          body : "TWO - Main article body - could be very long",
          viewCount : 0,
          articleDate : new Date(),
          keywords : [ "keyword2" ]
        }
      ]
    };

    articleClicked = (articleId) => {
      let currentArticleIndex = _.findIndex( this.state.articles, (o) => (o._id == articleId) );
      //console.log( "Resolved " + articleId + " to Index: " + currentArticleIndex );
      if ( currentArticleIndex >= 0 ) {
        let article = this.state.articles[currentArticleIndex];
        //console.log( "Article: " + article );
        this.setState( {
          viewMode : "article",
          currentArticleId : articleId,
          currentArticle : article
        });
      }
    } 

    returnClicked = () => {
      this.setState( {
        viewMode : "list"
      });
    }

    editClicked = () => {
      this.setState( {
        viewMode : "edit"
      });
    }

    saveClicked = () => {
      this.setState( {
        viewMode : "list"
      });
    }

    deleteClicked = () => {
      const {currentArticle, articles} = this.state;
      const newArticles = _.reject(articles, (article) => (article._id === currentArticle._id));
      this.setState( {
        viewMode : "list",
        articles: newArticles,
        currentArticle: null
      });
    }

    handleValueChange = (event) => {
      const {id, value} = event.target;
      console.log(`value changed: ${id} -> ${value}`)
      this.state.currentArticle[id] = value;
    }

    addNewArticle = () => {
      const articleId = _.uniqueId()
      const newArticle = {
        _id : articleId,
        title : `Article ${articleId}`,
        body : "",
        viewCount : 0,
        articleDate : new Date(),
        keywords : []
      };
      var articles = _.cloneDeep(this.state.articles);
      articles.push(newArticle);
      this.setState({articles: articles, currentArticle: newArticle, currentArticleId: articleId, viewMode: "edit"});
    }

    render() {
      const {viewMode, currentArticle, articles} = this.state;
      let mainContent = <div>MISSING VIEW</div>;
      if ( viewMode === "list" ) {
        mainContent = <ArticleList articles={articles} onClickArticle={this.articleClicked} />;
      } else if ( viewMode === "article" ) {
        mainContent = <ArticleView article={currentArticle} editMode={false} onEdit={this.editClicked} onDelete={this.deleteClicked} onReturn={this.returnClicked} />;
      } else if ( viewMode === "edit" ) {
        mainContent = <ArticleView article={currentArticle} editMode={true} onSave={this.saveClicked} onReturn={this.returnClicked} onValueChange={this.handleValueChange}/>;
      } 
      return (
        <div>
          <Header title={this.state.title} />          
          {mainContent}
          {viewMode === "list" ? <button className="btn btn-primary" onClick={this.addNewArticle}>New Article</button> : ""}
        </div>
      );
    }
}                           

ReactDOM.render(<App />, document.getElementById('app'));