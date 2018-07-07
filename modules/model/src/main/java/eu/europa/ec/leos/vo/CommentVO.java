/**
 * Copyright 2016 European Commission
 *
 * Licensed under the EUPL, Version 1.1 or – as soon they will be approved by the European Commission - subsequent versions of the EUPL (the "Licence");
 * You may not use this work except in compliance with the Licence.
 * You may obtain a copy of the Licence at:
 *
 *     https://joinup.ec.europa.eu/software/page/eupl
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the Licence is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the Licence for the specific language governing permissions and limitations under the Licence.
 */
package eu.europa.ec.leos.vo;

import java.io.Serializable;
import java.util.Date;

public class CommentVO implements Serializable{
    
    private static final long serialVersionUID = -6455596936827485583L;

    private String id; // id of comment
    private String enclosingElementId; // id of enclosingElement
    private String comment;//content of comment
    private String authorName;
    private String authorId;
    private String dg;
    private Date timestamp; //UTC time... any conversion should be done at client side
    private String authorAvatarUrl ;

    CommentVO(){
    }
    public CommentVO(String id, String enclosingElementId, String comment, String authorName, String authorId,String dg, Date timestamp) {
        this.id = id;
        this.enclosingElementId =enclosingElementId;
        this.comment = comment;
        this.authorName = authorName;
        this.authorId = authorId;
        this.timestamp = timestamp;
        this.dg=dg;
    }

    public String getEnclosingElementId() {
        return enclosingElementId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getId() {
        return id;
    }

    public String getAuthorName() {
        return authorName;
    }

    public String getAuthorId() {
        return authorId;
    }

    public Date getTimestamp() {
        return timestamp;
    }

	public String getDg() {
		return dg;
	}

	public void setDg(String dg) {
		this.dg = dg;
	}

    public String getAuthorAvatarUrl() {
        return authorAvatarUrl;
    }

    public void setAuthorAvatarUrl(String authorAvatarUrl) {
        this.authorAvatarUrl = authorAvatarUrl;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setEnclosingElementId(String enclosingElementId) {
        this.enclosingElementId = enclosingElementId;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
}
