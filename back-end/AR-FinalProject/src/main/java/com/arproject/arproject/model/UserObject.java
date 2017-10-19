package com.arproject.arproject.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "userobject")
public class UserObject {

    private int objId;
    private String objectType;
    private String objectDescription;
    private String userObj;
    private ArUser arUser;

  // *** POJO ***
    public UserObject() {}

  // *** GETTERs/SETTERs ***

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "person_id")
    public ArUser getArUser() { return arUser; }

    public void setArUser(ArUser arUser) { this.arUser = arUser; }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getObjId() { return objId; }

    public void setObjId(int objId) { this.objId = objId; }

    @Column(name = "objecttype")
    public String getObjectType() { return objectType; }

    public void setObjectType(String objectType) { this.objectType = objectType; }

    @Column(name = "objectdescription")
    public String getObjectDescription() { return objectDescription; }

    public void setObjectDescription(String objectDescription) { this.objectDescription = objectDescription; }

    @Column(name = "userobj")
    public String getUserObj() { return userObj; }

    public void setUserObj(String userObj) { this.userObj = userObj; }

  // * * * * * * * * *

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserObject that = (UserObject) o;

        return objId == that.objId;
    }

    @Override
    public int hashCode() {
        return objId;
    }

  // *** toString ***
    @Override
    public String toString() {
        return "UserObject{" +
                "objId=" + objId +
                ", objectType='" + objectType + '\'' +
                ", objectDescription='" + objectDescription + '\'' +
                ", userObj='" + userObj + '\'' +
                ", arUser=" + arUser +
                '}';
    }
}
