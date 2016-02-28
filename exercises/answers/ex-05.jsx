/** The component to show header **/
const Header = ({title}) => ( <div className="page-header"><h1>{title}</h1></div> );

/*
 *   The component to show a single article. It can be switched between 
 *   "view-only" mode and "edit" mode.
 */
const ArticleView = React.createClass({

  propTypes: {
    article: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onReturn: React.PropTypes.func.isRequired,
    isNew: React.PropTypes.bool
  },

  getInitialState() {
    return {
      article: this.props.article,
      editMode: this.props.isNew
    }
  },

  toggleEditMode() {
    this.setState({editMode: !this.state.editMode});
  },

  handleValueChange(event) {
    const {id, value} = event.target;
    console.log(`Input value changed: ${id} -> ${value}`)
    this.state.article[id] = value;  
  },

  onSaveClicked() {
    this.props.onSave(this.state.article);
    this.toggleEditMode();
  },

  onDeleteClicked() {
    this.props.onDelete(this.state.article._id);
  },

  render() {
    const {article, onReturn} = this.props;
    if ( this.state.editMode ) {
      return ( 
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.article.title}</h3>
          </div>
          <div className="panel-body">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Title:</th>
                  <td><input id="title" onChange={this.handleValueChange} defaultValue={article.title} /></td>
                </tr>
                <tr>
                  <th>Body:</th>
                  <td><textarea id="body" onChange={this.handleValueChange} rows="5" cols="60" defaultValue={article.body} /></td>
                </tr>
                <tr>
                  <th>ID:</th>
                  <td>{article._id?article._id:"(new)"}</td>
                </tr>
                <tr>
                  <th>Timestamp:</th>
                  <td>{article.timestamp.toString()}</td>
                </tr>
              </tbody>
            </table>
            <div className="btn-toolbar">
              <button type="button" className="btn btn-m btn-primary" onClick={this.onSaveClicked}>Save</button>
              <button type="button" className="btn btn-m btn-default"  onClick={this.toggleEditMode}>Cancel</button>
            </div>
          </div>
        </div> 
      );
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
              <tr><th>Timestamp:</th><td>{article.timestamp.toString()}</td></tr>
            </tbody></table>
            <div className="btn-toolbar">
              <button type="button" className="btn btn-m btn-primary" onClick={this.toggleEditMode}>Edit</button>
              <button type="button" className="btn btn-m btn-danger" onClick={this.onDeleteClicked}>Delete</button>
              <button type="button" className="btn btn-m btn-default"  onClick={onReturn}>Return</button>
            </div>
          </div>
        </div> 
      );
    }
  }  
});

/** The component to show a row of the KB article list **/
const ArticleRow = React.createClass({     
  propTypes: {
    article : React.PropTypes.object.isRequired,
    onClick : React.PropTypes.func.isRequired
  },  

  onClick() {
    this.props.onClick( this.props.article._id );
  },

  render() {
    return (
      <tr onClick={this.onClick}><td>{this.props.article.title}</td></tr>
    );
  }
});
               
/** The component to show a list of knowledge base articles **/               
const ArticleList = React.createClass({  
  propTypes: {
    articles : React.PropTypes.array.isRequired,
    onClickArticle : React.PropTypes.func.isRequired
  },   
                             
  render() {
    return ( 
      <div>
        <table className="table table-striped">
          <tbody>
          {
            this.props.articles.map( (article,i) => ( 
              <ArticleRow key={article._id} article={article} onClick={this.props.onClickArticle} /> 
            ))
          }
          </tbody>
        </table>
      </div>
    );
  }
});
                            
/** This is the main app component, which holds the application state **/                            
class App extends React.Component {

  state = {
    title : "Knowledge Base",
    viewMode : "list", // "list", "article", or "new"
    currentArticle : null,
    articles : [
      {
        _id : _.uniqueId(),
        title : "Article One",
        body : "Main article body - could be very long",
        viewCount : 0,
        timestamp : new Date(),
        keywords : [ "keyword1", "keyword2", "keyword3" ]
      },
      {
        _id : _.uniqueId(),
        title : "Article Two",
        body : "TWO - Main article body - could be very long",
        viewCount : 0,
        timestamp : new Date(),
        keywords : [ "keyword2" ]
      }
    ]
  }

  articleClicked = (articleId) => {
    let currentArticleIndex = _.findIndex( this.state.articles, (o) => (o._id == articleId) );
    //console.log( "Resolved " + articleId + " to Index: " + currentArticleIndex );
    if ( currentArticleIndex >= 0 ) {
      let article = this.state.articles[currentArticleIndex];
      //console.log( "Article: " + article );
      this.setState( {
        viewMode : "article",
        currentArticle : article
      });
    }
  } 

  switchToListView = () => {
    this.setState( {
      viewMode : "list"
    });
  }

  createNewArticle = () => {
    console.log("Calling createNewArticle()");
    const articleId = _.uniqueId()
    const newArticle = {
      _id : articleId,
      title : `Article ${articleId}`,
      body : "",
      viewCount : 0,
      timestamp : new Date(),
      keywords : []
    };
    var articles = _.cloneDeep(this.state.articles);
    articles.push(newArticle);
    this.setState({articles: articles, currentArticle: newArticle, viewMode: "new"});
  }

  updateArticle = (article) => {
    console.log('Calling updateArticle()');
    console.log(article);

    article.timestamp = new Date();
    
    const articles = this.state.articles.map( (a) => {
      if (a._id === article._id) {
        return article;
      } else {
        return a;
      }
    });

    this.setState({
      articles: articles
    });
  }

  deleteArticle = (articleId) => {
    console.log('Calling deleteArticle()');
    console.log(articleId);

    const articles = _.reject(this.state.articles, (article) => (article._id === articleId));

    this.setState( {
      viewMode : "list",
      articles: articles,
      currentArticle: null
    });
  }

  render() {
    const {viewMode, currentArticle, articles} = this.state;

    let mainContent = <div>MISSING VIEW</div>;
    if ( viewMode === "list" ) {
      mainContent = (
        <ArticleList 
          articles={articles} 
          onClickArticle={this.articleClicked} />
      );
    } else if ( viewMode === "article" ) {
      mainContent = (
        <ArticleView 
          article={currentArticle} 
          onSave={this.updateArticle} 
          onDelete={this.deleteArticle} 
          onReturn={this.switchToListView} 
          isNew = {false} />
      );
    } else if ( viewMode === "new" ) {
      mainContent = (
        <ArticleView 
          article={currentArticle} 
          onSave={this.updateArticle} 
          onDelete={this.deleteArticle} 
          onReturn={this.switchToListView} 
          isNew = {true} />
      );
    } 
    return (
      <div>
        <Header title={this.state.title} />          
        {mainContent}
        {viewMode === "list" ? <button className="btn btn-primary" onClick={this.createNewArticle}>New Article</button> : ""}
      </div>
    );
  }
}                           

ReactDOM.render(<App />, document.getElementById('app'));