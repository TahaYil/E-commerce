package com.taa.tshirtsatis.entity;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.Set;

@Entity
@Table(name = "ordered")
public class Ordered {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToMany(mappedBy = "ordered")
    private Set<Rewiew> rewiews;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Order order;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id",nullable = false)
    private Users user;

    private Date date;

    private String State;

    public Ordered() {
    }

    public Ordered(int id, Set<Rewiew> rewiews, Order order, Date date, String state) {
        this.id = id;
        this.rewiews = rewiews;
        this.order = order;
        this.date = date;
        State = state;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Set<Rewiew> getRewiews() {
        return rewiews;
    }

    public void setRewiews(Set<Rewiew> rewiews) {
        this.rewiews = rewiews;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }
}
